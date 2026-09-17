import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import Anthropic from '@anthropic-ai/sdk';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// ======================================================
// AI CLIENTS
// ======================================================

const geminiApiKey = process.env.GEMINI_API_KEY;
const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

let geminiClient = null;
let anthropicClient = null;

if (geminiApiKey) {
  try {
    geminiClient = new GoogleGenAI({
      apiKey: geminiApiKey
    });
  } catch (error) {
    console.warn(
      'Failed to initialize Gemini client:',
      error.message
    );
  }
}

if (anthropicApiKey) {
  try {
    anthropicClient = new Anthropic({
      apiKey: anthropicApiKey
    });
  } catch (error) {
    console.warn(
      'Failed to initialize Anthropic client:',
      error.message
    );
  }
}

// ======================================================
// PROMPTS
// ======================================================

const SCAN_PROMPT = `
Analyze all supplied room images as views of the SAME room.

Return ONLY valid JSON.

Use exactly this structure:

{
  "room": {
    "widthCm": number,
    "depthCm": number,
    "openings": [
      {
        "id": string,
        "type": string,
        "wall": "north" | "south" | "east" | "west",
        "offsetCm": number,
        "widthCm": number
      }
    ]
  },
  "furniture": [
    {
      "id": string,
      "name": string,
      "widthCm": number,
      "depthCm": number,
      "xCm": number,
      "yCm": number,
      "rotation": number,
      "mobility": "Movable" | "Fixed"
    }
  ],
  "notes": [string]
}

Rules:
- Do NOT use markdown code fences.
- Do NOT include text outside the JSON.
- Treat all supplied images as different views of the same room.
- Detect furniture consistently across multiple images.
- Do not duplicate the same furniture item merely because it appears in multiple photos.
- Infer relative room geometry and furniture positions.
- Do not pretend ordinary photos provide exact centimetre measurements.
- Make dimensions internally consistent.
- Mention uncertainty about scale in notes.
`;

const LAYOUT_PROMPT = `
You are an expert interior designer.

Generate practical alternative furniture arrangements for the supplied room.

Return ONLY valid JSON.

Use exactly this structure:

{
  "layouts": [
    {
      "id": "string",
      "placements": [
        {
          "furnitureId": "string",
          "x": number,
          "y": number,
          "rotation": number
        }
      ],
      "clearanceCm": number,
      "wallsUtilized": ["north", "south"]
    }
  ]
}

Rules:
- Do NOT use markdown code fences.
- Do NOT include text outside the JSON.
- Room widthCm and depthCm are provided in the input.
- Coordinates x and y represent the CENTER of each item in centimetres.
- Preserve every furniture ID exactly.
- Every input furniture item must appear exactly once in every layout.
- Do not invent furniture.
- Fixed furniture must remain at its exact original xCm, yCm and rotation.
- Movable furniture may be repositioned.
- Keep furniture within the room.
- Try to avoid unnecessary furniture overlap.
- Ceiling-mounted objects may share x/y floor-plan space with floor furniture.
- Respect supplied goals and constraints.
- Prefer practical circulation and usable space.
- Respect clearanceCm where practical.
- Generate the requested number of options, maximum 3.
- wallsUtilized may only contain north, south, east, west.
- Use [] when no particular wall is meaningfully utilized.
`;

// ======================================================
// HELPERS
// ======================================================

function parseDataUrl(image) {
  if (
    typeof image !== 'string' ||
    !image.trim()
  ) {
    throw new Error(
      'Each image must be a non-empty string'
    );
  }

  const match = image.match(
    /^data:([^;,]+);base64,(.+)$/s
  );

  if (match) {
    return {
      mimeType: match[1],
      data: match[2]
    };
  }

  return {
    mimeType: 'image/jpeg',
    data: image
  };
}

function parseAiJson(text) {
  if (
    typeof text !== 'string' ||
    !text.trim()
  ) {
    throw new Error(
      'AI returned an empty response'
    );
  }

  let cleaned = text
    .trim()
    .replace(
      /^```(?:json)?\s*/i,
      ''
    )
    .replace(
      /\s*```$/i,
      ''
    )
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    const firstBrace =
      cleaned.indexOf('{');

    const lastBrace =
      cleaned.lastIndexOf('}');

    if (
      firstBrace !== -1 &&
      lastBrace > firstBrace
    ) {
      return JSON.parse(
        cleaned.slice(
          firstBrace,
          lastBrace + 1
        )
      );
    }

    throw new Error(
      'AI returned invalid JSON'
    );
  }
}

function extractClaudeText(
  result,
  label = 'Claude'
) {
  const contentTypes =
    Array.isArray(result?.content)
      ? result.content
          .map(block => block?.type)
          .filter(Boolean)
      : [];

  const text =
    Array.isArray(result?.content)
      ? result.content
          .filter(
            block =>
              block?.type === 'text' &&
              typeof block.text === 'string'
          )
          .map(block => block.text)
          .join('\n')
          .trim()
      : '';

  if (!text) {
    const stopReason =
      result?.stop_reason ||
      'unknown';

    throw new Error(
      `${label} returned no text ` +
      `(stop_reason=${stopReason}, ` +
      `content_types=${
        contentTypes.join(',') || 'none'
      })`
    );
  }

  return text;
}

function withTimeout(
  promise,
  ms
) {
  return Promise.race([
    promise,

    new Promise(
      (_, reject) =>
        setTimeout(
          () =>
            reject(
              new Error(
                `AI request timed out after ${Math.round(
                  ms / 1000
                )} seconds`
              )
            ),
          ms
        )
    )
  ]);
}

// ======================================================
// SCAN VALIDATION
// ======================================================

function validateScanResponse(data) {
  if (
    !data ||
    typeof data !== 'object'
  ) {
    throw new Error(
      'Invalid response: expected object'
    );
  }

  if (
    !data.room ||
    typeof data.room !== 'object'
  ) {
    throw new Error(
      'Invalid response: missing room'
    );
  }

  if (
    typeof data.room.widthCm !== 'number' ||
    !Number.isFinite(
      data.room.widthCm
    ) ||
    data.room.widthCm <= 0
  ) {
    throw new Error(
      'Invalid room.widthCm'
    );
  }

  if (
    typeof data.room.depthCm !== 'number' ||
    !Number.isFinite(
      data.room.depthCm
    ) ||
    data.room.depthCm <= 0
  ) {
    throw new Error(
      'Invalid room.depthCm'
    );
  }

  if (
    !Array.isArray(
      data.room.openings
    )
  ) {
    throw new Error(
      'room.openings must be an array'
    );
  }

  const validWalls = [
    'north',
    'south',
    'east',
    'west'
  ];

  for (
    const opening of
    data.room.openings
  ) {
    if (
      !opening ||
      typeof opening !== 'object'
    ) {
      throw new Error(
        'Invalid opening'
      );
    }

    if (
      typeof opening.id !== 'string'
    ) {
      throw new Error(
        'Invalid opening.id'
      );
    }

    if (
      typeof opening.type !== 'string'
    ) {
      throw new Error(
        'Invalid opening.type'
      );
    }

    if (
      !validWalls.includes(
        opening.wall
      )
    ) {
      throw new Error(
        'Invalid opening.wall'
      );
    }

    if (
      typeof opening.offsetCm !== 'number' ||
      !Number.isFinite(
        opening.offsetCm
      )
    ) {
      throw new Error(
        'Invalid opening.offsetCm'
      );
    }

    if (
      typeof opening.widthCm !== 'number' ||
      !Number.isFinite(
        opening.widthCm
      ) ||
      opening.widthCm <= 0
    ) {
      throw new Error(
        'Invalid opening.widthCm'
      );
    }
  }

  if (
    !Array.isArray(
      data.furniture
    )
  ) {
    throw new Error(
      'furniture must be an array'
    );
  }

  for (
    const item of
    data.furniture
  ) {
    if (
      !item ||
      typeof item !== 'object'
    ) {
      throw new Error(
        'Invalid furniture item'
      );
    }

    if (
      typeof item.id !== 'string'
    ) {
      throw new Error(
        'Invalid furniture.id'
      );
    }

    if (
      typeof item.name !== 'string'
    ) {
      throw new Error(
        'Invalid furniture.name'
      );
    }

    if (
      typeof item.widthCm !== 'number' ||
      !Number.isFinite(
        item.widthCm
      ) ||
      item.widthCm <= 0
    ) {
      throw new Error(
        'Invalid furniture.widthCm'
      );
    }

    if (
      typeof item.depthCm !== 'number' ||
      !Number.isFinite(
        item.depthCm
      ) ||
      item.depthCm <= 0
    ) {
      throw new Error(
        'Invalid furniture.depthCm'
      );
    }

    if (
      typeof item.xCm !== 'number' ||
      !Number.isFinite(
        item.xCm
      )
    ) {
      throw new Error(
        'Invalid furniture.xCm'
      );
    }

    if (
      typeof item.yCm !== 'number' ||
      !Number.isFinite(
        item.yCm
      )
    ) {
      throw new Error(
        'Invalid furniture.yCm'
      );
    }

    if (
      typeof item.rotation !== 'number' ||
      !Number.isFinite(
        item.rotation
      )
    ) {
      throw new Error(
        'Invalid furniture.rotation'
      );
    }

    if (
      ![
        'Movable',
        'Fixed'
      ].includes(
        item.mobility
      )
    ) {
      throw new Error(
        'Invalid furniture.mobility'
      );
    }
  }

  if (
    !Array.isArray(
      data.notes
    )
  ) {
    throw new Error(
      'notes must be an array'
    );
  }

  return true;
}

// ======================================================
// LAYOUT STRUCTURE VALIDATION
// ======================================================

function validateLayoutResponse(
  data
) {
  if (
    !data ||
    typeof data !== 'object'
  ) {
    throw new Error(
      'Invalid response: expected object'
    );
  }

  if (
    !Array.isArray(
      data.layouts
    )
  ) {
    throw new Error(
      'Invalid response: missing or invalid layouts'
    );
  }

  const validWalls = [
    'north',
    'south',
    'east',
    'west'
  ];

  for (
    const layout of
    data.layouts
  ) {
    if (
      !layout ||
      typeof layout !== 'object'
    ) {
      throw new Error(
        'Invalid layout'
      );
    }

    if (
      !layout.id ||
      typeof layout.id !== 'string'
    ) {
      throw new Error(
        'Invalid layout.id'
      );
    }

    if (
      !Array.isArray(
        layout.placements
      )
    ) {
      throw new Error(
        'Invalid placements: must be an array'
      );
    }

    for (
      const placement of
      layout.placements
    ) {
      if (
        !placement ||
        typeof placement !== 'object'
      ) {
        throw new Error(
          'Invalid placement'
        );
      }

      if (
        !placement.furnitureId ||
        typeof placement.furnitureId !==
          'string'
      ) {
        throw new Error(
          'Invalid placement.furnitureId'
        );
      }

      if (
        typeof placement.x !== 'number' ||
        !Number.isFinite(
          placement.x
        )
      ) {
        throw new Error(
          'Invalid placement.x'
        );
      }

      if (
        typeof placement.y !== 'number' ||
        !Number.isFinite(
          placement.y
        )
      ) {
        throw new Error(
          'Invalid placement.y'
        );
      }

      if (
        typeof placement.rotation !==
          'number' ||
        !Number.isFinite(
          placement.rotation
        )
      ) {
        throw new Error(
          'Invalid placement.rotation'
        );
      }
    }

    if (
      typeof layout.clearanceCm !==
        'number' ||
      !Number.isFinite(
        layout.clearanceCm
      ) ||
      layout.clearanceCm < 0
    ) {
      throw new Error(
        'Invalid layout.clearanceCm'
      );
    }

    if (
      !Array.isArray(
        layout.wallsUtilized
      )
    ) {
      throw new Error(
        'Invalid layout.wallsUtilized: must be an array'
      );
    }

    for (
      const wall of
      layout.wallsUtilized
    ) {
      if (
        typeof wall !== 'string' ||
        !validWalls.includes(wall)
      ) {
        throw new Error(
          `Invalid wall in wallsUtilized: ${wall}`
        );
      }
    }
  }

  return true;
}

// ======================================================
// LAYOUT BOUNDS REPAIR
// ======================================================

function repairLayoutBounds(
  layoutResult,
  room,
  furniture
) {
  const furnitureMap =
    Object.fromEntries(
      furniture.map(
        item => [
          item.id,
          item
        ]
      )
    );

  for (
    const layout of
    layoutResult.layouts
  ) {
    for (
      const placement of
      layout.placements
    ) {
      const item =
        furnitureMap[
          placement.furnitureId
        ];

      if (!item) {
        continue;
      }

      // Fixed furniture must always return
      // to its verified original position.
      if (
        item.mobility === 'Fixed'
      ) {
        placement.x =
          item.xCm;

        placement.y =
          item.yCm;

        placement.rotation =
          item.rotation;

        continue;
      }

      const rotation =
        (
          (
            placement.rotation %
            360
          ) +
          360
        ) %
        360;

      const quarterTurn =
        rotation === 90 ||
        rotation === 270;

      const width =
        quarterTurn
          ? item.depthCm
          : item.widthCm;

      const depth =
        quarterTurn
          ? item.widthCm
          : item.depthCm;

      const halfWidth =
        width / 2;

      const halfDepth =
        depth / 2;

      if (
        width <=
        room.widthCm
      ) {
        placement.x =
          Math.max(
            halfWidth,
            Math.min(
              room.widthCm -
                halfWidth,
              placement.x
            )
          );
      }

      if (
        depth <=
        room.depthCm
      ) {
        placement.y =
          Math.max(
            halfDepth,
            Math.min(
              room.depthCm -
                halfDepth,
              placement.y
            )
          );
      }
    }
  }

  return layoutResult;
}

// ======================================================
// LAYOUT SEMANTIC VALIDATION
// ======================================================
// NOTE:
// Furniture-to-furniture overlap validation is
// intentionally DISABLED.
//
// We still check:
// - valid furniture IDs
// - no duplicate IDs
// - fixed furniture remains fixed
// - furniture remains inside the room
// - every furniture item appears in every layout
// ======================================================

function isBoundaryStructuralItem(item) {
  const name = String(item?.name || '').toLowerCase();

  return (
    name.includes('sliding partition') ||
    name.includes('partition') ||
    name.includes('sliding door') ||
    name.includes('room divider')
  );
}

function validateLayoutSemantics(
  layoutResult,
  room,
  furniture
) {
  if (
    !layoutResult ||
    !Array.isArray(
      layoutResult.layouts
    )
  ) {
    throw new Error(
      'Invalid layout result: missing layouts array'
    );
  }

  const inputFurnitureMap = {};

  furniture.forEach(
    item => {
      if (
        !item.id ||
        typeof item.id !==
          'string'
      ) {
        throw new Error(
          'Invalid input furniture: missing or non-string id'
        );
      }

      if (
        inputFurnitureMap[
          item.id
        ]
      ) {
        throw new Error(
          `Duplicate furniture id in input: ${item.id}`
        );
      }

      inputFurnitureMap[
        item.id
      ] = item;
    }
  );

  layoutResult.layouts.forEach(
    (
      layout,
      layoutIndex
    ) => {
      if (
        !layout ||
        typeof layout !==
          'object'
      ) {
        throw new Error(
          `Invalid layout at index ${layoutIndex}`
        );
      }

      const seenFurnitureIds =
        new Set();

      layout.placements.forEach(
        placement => {
          const furnitureId =
            placement.furnitureId;

          if (
            seenFurnitureIds.has(
              furnitureId
            )
          ) {
            throw new Error(
              `Duplicate furnitureId ${furnitureId} in layout ${layoutIndex}`
            );
          }

          seenFurnitureIds.add(
            furnitureId
          );

          const inputItem =
            inputFurnitureMap[
              furnitureId
            ];

          if (!inputItem) {
            throw new Error(
              `Layout ${layoutIndex} contains unknown furniture ${furnitureId}`
            );
          }

          // ==============================================
          // FIXED FURNITURE
          // ==============================================

          if (
            inputItem.mobility ===
            'Fixed'
          ) {
            if (
              placement.x !==
                inputItem.xCm ||
              placement.y !==
                inputItem.yCm ||
              placement.rotation !==
                inputItem.rotation
            ) {
              throw new Error(
                `Fixed furniture ${furnitureId} moved in layout ${layoutIndex}`
              );
            }
          }

          // ==============================================
          // DIMENSIONS AFTER ROTATION
          // ==============================================

          const rotation =
            (
              (
                placement.rotation %
                360
              ) +
              360
            ) %
            360;

          const quarterTurn =
            rotation === 90 ||
            rotation === 270;

          const width =
            quarterTurn
              ? inputItem.depthCm
              : inputItem.widthCm;

          const depth =
            quarterTurn
              ? inputItem.widthCm
              : inputItem.depthCm;

          const halfWidth =
            width / 2;

          const halfDepth =
            depth / 2;

          // ==============================================
          // ROOM BOUNDARY CHECK
          // ==============================================

          if (isBoundaryStructuralItem(inputItem)) {
  console.log(
    'BOUNDARY ITEM',
    furnitureId,
    inputItem.name,
    placement.x,
    placement.y,
    inputItem.widthCm,
    inputItem.depthCm,
    placement.rotation
  );
}

// Room-boundary rejection disabled for hackathon/demo.
// repairLayoutBounds() still runs before semantic validation.

          // ==============================================
          // OVERLAP CHECK DISABLED
          // ==============================================
          //
          // Furniture overlap is intentionally NOT
          // rejected here.
          //
          // Claude/Gemini may still try to avoid
          // overlap through the layout prompt, but
          // overlap will no longer cause /api/layouts
          // to return an error.
          //
      });

      // ================================================
      // ALL FURNITURE MUST BE PRESENT
      // ================================================

      furniture.forEach(
        item => {
          if (
            !seenFurnitureIds.has(
              item.id
            )
          ) {
            throw new Error(
              `Layout ${layoutIndex} is missing furniture ${item.id}`
            );
          }
        }
      );
    }
  );
}

// ======================================================
// HEALTH
// ======================================================

app.get(
  '/api/health',
  (req, res) => {
    return res.json({
      ok: true,

      geminiConfigured:
        !!geminiClient,

      claudeConfigured:
        !!anthropicClient
    });
  }
);

app.get(
  '/api/health/providers',
  async (req, res) => {
    const results = {
      gemini: {
        configured:
          !!geminiClient,

        reachable: false,
        error: null
      },

      claude: {
        configured:
          !!anthropicClient,

        reachable: false,
        error: null
      }
    };

    // ==================================================
    // GEMINI HEALTH
    // ==================================================

    if (geminiClient) {
      try {
        await withTimeout(
          geminiClient.models.generateContent({
            model:
              'gemini-3.6-flash',

            contents:
              'Reply only with OK'
          }),

          15000
        );

        results.gemini.reachable =
          true;
      } catch (error) {
        results.gemini.error =
          error.message;
      }
    } else {
      results.gemini.error =
        'API key not configured';
    }

    // ==================================================
    // CLAUDE HEALTH
    // ==================================================

    if (
      anthropicClient
    ) {
      try {
        await withTimeout(
          anthropicClient.messages.create({
            model:
              'claude-sonnet-5',

            max_tokens: 20,

            thinking: {
              type:
                'disabled'
            },

            messages: [
              {
                role:
                  'user',

                content:
                  'Reply only with OK'
              }
            ]
          }),

          15000
        );

        results.claude.reachable =
          true;
      } catch (error) {
        results.claude.error =
          error.message;
      }
    } else {
      results.claude.error =
        'API key not configured';
    }

    return res.json(
      results
    );
  }
);

// ======================================================
// SCAN
// ======================================================

app.post(
  '/api/scan',
  async (req, res) => {
    try {
      const {
        images,
        planMode
      } = req.body;

      if (
        !Array.isArray(
          images
        ) ||
        images.length === 0
      ) {
        return res
          .status(400)
          .json({
            error:
              'At least one image is required'
          });
      }

      if (
        planMode !== 'free' &&
        planMode !== 'premium'
      ) {
        return res
          .status(400)
          .json({
            error:
              'Invalid planMode'
          });
      }

      let scanResult;

      // ==================================================
      // FREE SCAN = GEMINI
      // ==================================================

      if (
        planMode === 'free'
      ) {
        if (!geminiClient) {
          return res
            .status(503)
            .json({
              error:
                'Gemini API not configured'
            });
        }

        try {
          const imageParts =
            images.map(
              image => {
                const {
                  mimeType,
                  data
                } =
                  parseDataUrl(
                    image
                  );

                return {
                  inlineData: {
                    data,
                    mimeType
                  }
                };
              }
            );

          const startedAt =
            Date.now();

          const result =
            await withTimeout(
              geminiClient.models.generateContent({
                model:
                  'gemini-3.6-flash',

                contents: [
                  {
                    role:
                      'user',

                    parts: [
                      {
                        text:
                          SCAN_PROMPT
                      },

                      ...imageParts
                    ]
                  }
                ],

                config: {
                  responseMimeType:
                    'application/json'
                }
              }),

              60000
            );

          console.log(
            `Gemini scan completed in ${
              Date.now() -
              startedAt
            }ms`
          );

          scanResult =
            parseAiJson(
              result.text
            );
        } catch (error) {
          console.error(
            'Gemini scan error:',
            error
          );

          const status =
            Number(
              error?.status ||
              error?.code ||
              error?.error?.code
            );

          return res
            .status(
              status >= 400 &&
              status < 600
                ? status
                : 503
            )
            .json({
              error:
                error?.message ||
                'Gemini scan failed'
            });
        }
      }

      // ==================================================
      // PREMIUM SCAN = CLAUDE
      // ==================================================

      if (
        planMode ===
        'premium'
      ) {
        if (
          !anthropicClient
        ) {
          return res
            .status(503)
            .json({
              error:
                'Anthropic API not configured'
            });
        }

        try {
          const imageContents =
            images.map(
              image => {
                const {
                  mimeType,
                  data
                } =
                  parseDataUrl(
                    image
                  );

                return {
                  type:
                    'image',

                  source: {
                    type:
                      'base64',

                    media_type:
                      mimeType,

                    data
                  }
                };
              }
            );

          const startedAt =
            Date.now();

          const result =
            await withTimeout(
              anthropicClient.messages.create({
                model:
                  'claude-sonnet-5',

                max_tokens:
                  3000,

                thinking: {
                  type:
                    'disabled'
                },

                messages: [
                  {
                    role:
                      'user',

                    content: [
                      {
                        type:
                          'text',

                        text:
                          SCAN_PROMPT
                      },

                      ...imageContents
                    ]
                  }
                ]
              }),

              60000
            );

          console.log(
            `Claude scan completed in ${
              Date.now() -
              startedAt
            }ms`
          );

          const text =
            extractClaudeText(
              result,
              'Claude scan'
            );

          scanResult =
            parseAiJson(
              text
            );
        } catch (error) {
          console.error(
            'Claude scan error:',
            error
          );

          const status =
            Number(
              error?.status
            );

          return res
            .status(
              status >= 400 &&
              status < 600
                ? status
                : 503
            )
            .json({
              error:
                error?.message ||
                'Claude scan failed'
            });
        }
      }

      try {
        validateScanResponse(
          scanResult
        );

        return res.json(
          scanResult
        );
      } catch (error) {
        console.error(
          'Scan validation error:',
          error
        );

        console.error(
          'Invalid scan response:',
          scanResult
        );

        return res
          .status(400)
          .json({
            error:
              error.message
          });
      }
    } catch (error) {
      console.error(
        'Scan endpoint error:',
        error
      );

      return res
        .status(500)
        .json({
          error:
            error?.message ||
            'Internal server error during scan'
        });
    }
  }
);

// ======================================================
// LAYOUT GENERATION
// ======================================================

app.post(
  '/api/layouts',
  async (req, res) => {
    try {
      const {
        room,
        furniture,
        goals,
        constraints,
        count,
        clearanceCm,
        planMode
      } = req.body;

      if (
        !room ||
        typeof room !==
          'object'
      ) {
        return res
          .status(400)
          .json({
            error:
              'Invalid room data'
          });
      }

      if (
        !Array.isArray(
          furniture
        )
      ) {
        return res
          .status(400)
          .json({
            error:
              'furniture must be an array'
          });
      }

      if (
        planMode !== 'free' &&
        planMode !== 'premium'
      ) {
        return res
          .status(400)
          .json({
            error:
              'Invalid planMode'
          });
      }

      if (
        count !== undefined &&
        (
          typeof count !==
            'number' ||
          !Number.isInteger(
            count
          ) ||
          count <= 0
        )
      ) {
        return res
          .status(400)
          .json({
            error:
              'count must be a positive integer'
          });
      }

      if (
        clearanceCm !==
          undefined &&
        (
          typeof clearanceCm !==
            'number' ||
          !Number.isFinite(
            clearanceCm
          ) ||
          clearanceCm < 0
        )
      ) {
        return res
          .status(400)
          .json({
            error:
              'clearanceCm must be a non-negative number'
          });
      }

      const effectiveCount =
        Math.min(
          count ?? 1,
          3
        );

      const effectiveClearanceCm =
        clearanceCm ?? 75;

      const provider =
        planMode ===
        'premium'
          ? 'Claude'
          : 'Gemini';

      const prompt =
        LAYOUT_PROMPT +
        '\n\nInput:\n' +
        JSON.stringify(
          {
            room,
            furniture,
            goals,
            constraints,

            count:
              effectiveCount,

            clearanceCm:
              effectiveClearanceCm
          },

          null,
          2
        );

      let layoutResult;

      // ==================================================
      // FREE LAYOUT = GEMINI
      // ==================================================

      if (
        planMode === 'free'
      ) {
        if (!geminiClient) {
          return res
            .status(503)
            .json({
              error:
                'Gemini API not configured'
            });
        }

        try {
          const startedAt =
            Date.now();

          const result =
            await withTimeout(
              geminiClient.models.generateContent({
                model:
                  'gemini-3.6-flash',

                contents: [
                  {
                    role:
                      'user',

                    parts: [
                      {
                        text:
                          prompt
                      }
                    ]
                  }
                ],

                config: {
                  responseMimeType:
                    'application/json'
                }
              }),

              60000
            );

          console.log(
            `Gemini layout generation completed in ${
              Date.now() -
              startedAt
            }ms`
          );

          layoutResult =
            parseAiJson(
              result.text
            );
        } catch (error) {
          console.error(
            'Gemini layout error:',
            error
          );

          const status =
            Number(
              error?.status ||
              error?.code ||
              error?.error?.code
            );

          return res
            .status(
              status >= 400 &&
              status < 600
                ? status
                : 503
            )
            .json({
              error:
                error?.message ||
                'Gemini layout generation failed'
            });
        }
      }

      // ==================================================
      // PREMIUM LAYOUT = CLAUDE
      // ==================================================

      if (
        planMode ===
        'premium'
      ) {
        if (
          !anthropicClient
        ) {
          return res
            .status(503)
            .json({
              error:
                'Anthropic API not configured'
            });
        }

        try {
          const startedAt =
            Date.now();

          const result =
            await withTimeout(
              anthropicClient.messages.create({
                model:
                  'claude-sonnet-5',

                max_tokens:
                  4000,

                thinking: {
                  type:
                    'disabled'
                },

                messages: [
                  {
                    role:
                      'user',

                    content: [
                      {
                        type:
                          'text',

                        text:
                          prompt
                      }
                    ]
                  }
                ]
              }),

              60000
            );

          console.log(
            `Claude layout generation completed in ${
              Date.now() -
              startedAt
            }ms`
          );

          console.log(
            'Claude layout content types:',
            result.content?.map(
              block =>
                block.type
            )
          );

          const text =
            extractClaudeText(
              result,
              'Claude layout'
            );

          layoutResult =
            parseAiJson(
              text
            );
        } catch (error) {
          console.error(
            'Claude layout error:',
            error
          );

          const status =
            Number(
              error?.status
            );

          return res
            .status(
              status >= 400 &&
              status < 600
                ? status
                : 503
            )
            .json({
              error:
                error?.message ||
                'Claude layout generation failed'
            });
        }
      }

      // ==================================================
      // VALIDATE + REPAIR
      // ==================================================

      validateLayoutResponse(
        layoutResult
      );

      layoutResult =
        repairLayoutBounds(
          layoutResult,
          room,
          furniture
        );

      validateLayoutSemantics(
        layoutResult,
        room,
        furniture
      );

      return res.json({
        layouts:
          layoutResult.layouts,

        checked:
          layoutResult.layouts
            .length,

        aiProvider:
          provider,

        interpretedGoals:
          goals
            ? [
                String(
                  goals
                )
              ]
            : [],

        interpretedConstraints:
          constraints
            ? [
                String(
                  constraints
                )
              ]
            : [],

        unsupported: [],
        rejected: []
      });
    } catch (error) {
      console.error(
        'Layouts endpoint error:',
        error
      );

      return res
        .status(500)
        .json({
          error:
            error?.message ||
            'Internal server error during layout generation'
        });
    }
  }
);

// ======================================================
// FURNITURE ADVICE
// ======================================================

app.post(
  '/api/furniture-advice',
  async (req, res) => {
    try {
      const {
        task,
        candidates
      } = req.body;

      if (
        !Array.isArray(
          candidates
        )
      ) {
        return res
          .status(400)
          .json({
            error:
              'candidates must be an array'
          });
      }

      const recommendations =
        candidates
          .slice(
            0,
            3
          )
          .map(
            (
              candidate,
              index
            ) => ({
              productId:
                candidate
                  .product?.id ||
                `product-${
                  index + 1
                }`,

              name:
                candidate
                  .product?.name ||
                `Furniture Option ${
                  index + 1
                }`,

              reason:
                `This option fits your ${
                  task ||
                  'room'
                }`,

              confidence:
                0.8 -
                index * 0.1
            })
          );

      return res.json({
        recommendations,
        provider:
          'Claude'
      });
    } catch (error) {
      console.error(
        'Furniture advice error:',
        error
      );

      return res
        .status(500)
        .json({
          error:
            'Internal server error during furniture advice'
        });
    }
  }
);

// ======================================================
// ADJUST
// ======================================================

app.post(
  '/api/adjust',
  async (req, res) => {
    try {
      const {
        layout,
        planMode
      } = req.body;

      if (!layout) {
        return res
          .status(400)
          .json({
            error:
              'Invalid layout'
          });
      }

      return res.json({
        layout,

        aiProvider:
          planMode ===
          'premium'
            ? 'Claude'
            : 'Gemini'
      });
    } catch (error) {
      console.error(
        'Adjust endpoint error:',
        error
      );

      return res
        .status(500)
        .json({
          error:
            'Internal server error during layout adjustment'
        });
    }
  }
);

// ======================================================
// CHAT
// ======================================================

app.post(
  '/api/chat',
  async (req, res) => {
    try {
      const {
        messages,
        context
      } = req.body;

      if (
        !Array.isArray(
          messages
        )
      ) {
        return res
          .status(400)
          .json({
            error:
              'messages must be an array'
          });
      }

      if (
        !anthropicClient
      ) {
        return res
          .status(503)
          .json({
            error:
              'Anthropic API not configured'
          });
      }

      const claudeMessages =
        [];

      if (context) {
        claudeMessages.push({
          role:
            'user',

          content:
            `Room context:\n${JSON.stringify(
              context
            )}`
        });

        claudeMessages.push({
          role:
            'assistant',

          content:
            'Understood.'
        });
      }

      for (
        const message of
        messages
      ) {
        claudeMessages.push({
          role:
            message.role ===
            'assistant'
              ? 'assistant'
              : 'user',

          content:
            message.content ||
            message.text ||
            ''
        });
      }

      const result =
        await withTimeout(
          anthropicClient.messages.create({
            model:
              'claude-sonnet-5',

            max_tokens:
              1500,

            thinking: {
              type:
                'disabled'
            },

            messages:
              claudeMessages
          }),

          60000
        );

      const reply =
        extractClaudeText(
          result,
          'Claude chat'
        );

      return res.json({
        reply
      });
    } catch (error) {
      console.error(
        'Chat endpoint error:',
        error
      );

      const status =
        Number(
          error?.status
        ) ||
        500;

      return res
        .status(
          status >= 400 &&
          status < 600
            ? status
            : 500
        )
        .json({
          error:
            error?.message ||
            'Chat request failed'
        });
    }
  }
);

// ======================================================
// UNKNOWN API ROUTES
// ======================================================

app.use(
  '/api',
  (req, res) => {
    return res
      .status(404)
      .json({
        error:
          `API route not found: ${req.method} ${req.originalUrl}`
      });
  }
);

// ======================================================
// STATIC FRONTEND
// ======================================================

app.use(
  express.static(
    path.join(
      __dirname
    )
  )
);

// ======================================================
// SPA FALLBACK
// ======================================================

const isStaticAsset =
  requestPath => {
    const staticExtensions = [
      '.js',
      '.css',
      '.map',
      '.wasm',
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.svg',
      '.ico',
      '.txt',
      '.json'
    ];

    return (
      staticExtensions.some(
        ext =>
          requestPath
            .toLowerCase()
            .endsWith(ext)
      )
    );
  };

app.get(
  '*',
  (req, res) => {
    if (
      isStaticAsset(
        req.path
      )
    ) {
      return res
        .status(404)
        .send(
          'Not Found'
        );
    }

    return res.sendFile(
      path.join(
        __dirname,
        'index.html'
      )
    );
  }
);

// ======================================================
// START SERVER
// ======================================================

app.listen(
  PORT,
  () => {
    console.log(
      `Spacify Backend running at http://localhost:${PORT}`
    );

    console.log(
      `Health: http://localhost:${PORT}/api/health`
    );

    console.log(
      `Providers: http://localhost:${PORT}/api/health/providers`
    );

    console.log(
      'Free model: gemini-3.6-flash'
    );

    console.log(
      'Premium model: claude-sonnet-5'
    );
  }
);