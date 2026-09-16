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
You are an expert interior designer. Generate furniture layout options for a room based on the provided details.

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
      "wallsUtilized": ["north", "south", "east", "west"]
    }
  ]
}

Rules:
- Do NOT use markdown code fences.
- Do NOT include text outside the JSON.
- The room dimensions (widthCm, depthCm) are provided in the input.
- All furniture items must be placed within the room boundaries.
- Fixed items (mobility: "Fixed") must remain at their exact input positions (xCm, yCm) and rotation.
- Movable items (mobility: "Movable") can be placed anywhere within the room, respecting constraints.
- Do not overlap furniture items; leave at least the specified clearanceCm between items and walls if possible, but prioritize staying within room and respecting fixed items.
- Take into account the provided goals and constraints to inform the layout choices.
- Generate the number of layout options requested (up to 3).
`;

// ======================================================
// HELPERS
// ======================================================

function parseDataUrl(image) {
  if (typeof image !== 'string' || !image.trim()) {
    throw new Error('Each image must be a non-empty string');
  }

  const match = image.match(/^data:([^;,]+);base64,(.+)$/s);

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
  if (typeof text !== 'string' || !text.trim()) {
    throw new Error('AI returned an empty response');
  }

  let cleaned = text.trim();

  cleaned = cleaned
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');

    if (firstBrace !== -1 && lastBrace > firstBrace) {
      return JSON.parse(
        cleaned.slice(firstBrace, lastBrace + 1)
      );
    }

    throw new Error('AI returned invalid JSON');
  }
}

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(
        () =>
          reject(
            new Error(
              `AI request timed out after ${Math.round(ms / 1000)} seconds`
            )
          ),
        ms
      )
    )
  ]);
}

function validateScanResponse(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid response: expected object');
  }

  if (!data.room || typeof data.room !== 'object') {
    throw new Error('Invalid response: missing room');
  }

  if (
    typeof data.room.widthCm !== 'number' ||
    !Number.isFinite(data.room.widthCm) ||
    data.room.widthCm <= 0
  ) {
    throw new Error('Invalid room.widthCm');
  }

  if (
    typeof data.room.depthCm !== 'number' ||
    !Number.isFinite(data.room.depthCm) ||
    data.room.depthCm <= 0
  ) {
    throw new Error('Invalid room.depthCm');
  }

  if (!Array.isArray(data.room.openings)) {
    throw new Error('room.openings must be an array');
  }

  const validWalls = ['north', 'south', 'east', 'west'];

  for (const opening of data.room.openings) {
    if (!opening || typeof opening !== 'object') {
      throw new Error('Invalid opening');
    }

    if (typeof opening.id !== 'string') {
      throw new Error('Invalid opening.id');
    }

    if (typeof opening.type !== 'string') {
      throw new Error('Invalid opening.type');
    }

    if (!validWalls.includes(opening.wall)) {
      throw new Error('Invalid opening.wall');
    }

    if (
      typeof opening.offsetCm !== 'number' ||
      !Number.isFinite(opening.offsetCm)
    ) {
      throw new Error('Invalid opening.offsetCm');
    }

    if (
      typeof opening.widthCm !== 'number' ||
      !Number.isFinite(opening.widthCm) ||
      opening.widthCm <= 0
    ) {
      throw new Error('Invalid opening.widthCm');
    }
  }

  if (!Array.isArray(data.furniture)) {
    throw new Error('furniture must be an array');
  }

  for (const item of data.furniture) {
    if (!item || typeof item !== 'object') {
      throw new Error('Invalid furniture item');
    }

    if (typeof item.id !== 'string') {
      throw new Error('Invalid furniture.id');
    }

    if (typeof item.name !== 'string') {
      throw new Error('Invalid furniture.name');
    }

    if (
      typeof item.widthCm !== 'number' ||
      !Number.isFinite(item.widthCm) ||
      item.widthCm <= 0
    ) {
      throw new Error('Invalid furniture.widthCm');
    }

    if (
      typeof item.depthCm !== 'number' ||
      !Number.isFinite(item.depthCm) ||
      item.depthCm <= 0
    ) {
      throw new Error('Invalid furniture.depthCm');
    }

    if (
      typeof item.xCm !== 'number' ||
      !Number.isFinite(item.xCm)
    ) {
      throw new Error('Invalid furniture.xCm');
    }

    if (
      typeof item.yCm !== 'number' ||
      !Number.isFinite(item.yCm)
    ) {
      throw new Error('Invalid furniture.yCm');
    }

    if (
      typeof item.rotation !== 'number' ||
      !Number.isFinite(item.rotation)
    ) {
      throw new Error('Invalid furniture.rotation');
    }

    if (!['Movable', 'Fixed'].includes(item.mobility)) {
      throw new Error('Invalid furniture.mobility');
    }
  }

  if (!Array.isArray(data.notes)) {
    throw new Error('notes must be an array');
  }

  return true;
}

function validateLayoutResponse(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid response: expected object');
  }

  if (!data.layouts || !Array.isArray(data.layouts)) {
    throw new Error('Invalid response: missing or invalid layouts');
  }

  for (const layout of data.layouts) {
    if (!layout || typeof layout !== 'object') {
      throw new Error('Invalid layout');
    }

    if (!layout.id || typeof layout.id !== 'string') {
      throw new Error('Invalid layout.id');
    }

    if (!Array.isArray(layout.placements)) {
      throw new Error('Invalid placements: must be an array');
    }

    for (const placement of layout.placements) {
      if (!placement || typeof placement !== 'object') {
        throw new Error('Invalid placement');
      }

      if (!placement.furnitureId || typeof placement.furnitureId !== 'string') {
        throw new Error('Invalid placement.furnitureId');
      }

      if (typeof placement.x !== 'number' || !Number.isFinite(placement.x)) {
        throw new Error('Invalid placement.x');
      }

      if (typeof placement.y !== 'number' || !Number.isFinite(placement.y)) {
        throw new Error('Invalid placement.y');
      }

      if (typeof placement.rotation !== 'number' || !Number.isFinite(placement.rotation)) {
        throw new Error('Invalid placement.rotation');
      }
    }

    if (typeof layout.clearanceCm !== 'number' || !Number.isFinite(layout.clearanceCm) || layout.clearanceCm < 0) {
      throw new Error('Invalid layout.clearanceCm');
    }

    if (!Array.isArray(layout.wallsUtilized)) {
      throw new Error('Invalid layout.wallsUtilized: must be an array');
    }
    const validWalls = ['north', 'south', 'east', 'west'];
    for (const wall of layout.wallsUtilized) {
      if (typeof wall !== 'string' || !validWalls.includes(wall)) {
        throw new Error('Invalid wall in wallsUtilized: ' + wall + '. Must be one of north, south, east, west');
      }
    }
  }

  return true;
}

// ======================================================
// HEALTH
// ======================================================

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    geminiConfigured: !!process.env.GEMINI_API_KEY,
    claudeConfigured: !!process.env.ANTHROPIC_API_KEY
  });
});

app.get('/api/health/providers', async (req, res) => {
  const results = {
    gemini: {
      configured: !!geminiClient,
      reachable: false,
      error: null
    },
    claude: {
      configured: !!anthropicClient,
      reachable: false,
      error: null
    }
  };

  if (geminiClient) {
    try {
      await withTimeout(
        geminiClient.models.generateContent({
          model: 'gemini-3.6-flash',
          contents: 'Reply only with OK'
        }),
        15000
      );

      results.gemini.reachable = true;
    } catch (error) {
      results.gemini.error = error.message;
    }
  } else {
    results.gemini.error = 'API key not configured';
  }

  if (anthropicClient) {
    try {
      await anthropicClient.messages.create({
        model: 'claude-sonnet-5',
        max_tokens: 10,
        messages: [
          {
            role: 'user',
            content: 'Reply only with OK'
          }
        ]
      });

      results.claude.reachable = true;
    } catch (error) {
      results.claude.error = error.message;
    }
  } else {
    results.claude.error = 'API key not configured';
  }

  res.json(results);
});

// ======================================================
// SCAN
// ======================================================

app.post('/api/scan', async (req, res) => {
  try {
    const { images, planMode } = req.body;

    if (!Array.isArray(images) || images.length === 0) {
      return res.status(400).json({
        error: 'At least one image is required'
      });
    }

    if (planMode !== 'free' && planMode !== 'premium') {
      return res.status(400).json({
        error: 'Invalid planMode'
      });
    }

    let scanResult;

    // ==================================================
    // FREE = GEMINI 3.6 FLASH
    // ==================================================

    if (planMode === 'free') {
      if (!geminiClient) {
        return res.status(503).json({
          error: 'Gemini API not configured'
        });
      }

      try {
        const imageParts = images.map(image => {
          const { mimeType, data } = parseDataUrl(image);

          return {
            inlineData: {
              data,
              mimeType
            }
          };
        });

        console.log(
          `Gemini 3.6 scan started with ${images.length} image(s)`
        );

        const startedAt = Date.now();

        const result = await withTimeout(
          geminiClient.models.generateContent({
            model: 'gemini-3.6-flash',

            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: SCAN_PROMPT
                  },
                  ...imageParts
                ]
              }
            ],

            config: {
              responseMimeType: 'application/json'
            }
          }),
          30000
        );

        console.log(
          `Gemini 3.6 scan completed in ${Date.now() - startedAt}ms`
        );

        scanResult = parseAiJson(result.text);

      } catch (error) {
        console.error(
          'Gemini scan error:',
          error
        );

        const status = Number(
          error?.status ||
          error?.code ||
          error?.error?.code
        );

        return res
          .status(
            status >= 400 && status < 600
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
    // PREMIUM = CLAUDE
    // ==================================================

    if (planMode === 'premium') {
      if (!anthropicClient) {
        return res.status(503).json({
          error: 'Anthropic API not configured'
        });
      }

      try {
        const imageContents = images.map(image => {
          const { mimeType, data } = parseDataUrl(image);

          return {
            type: 'image',
            source: {
              type: 'base64',
              media_type: mimeType,
              data
            }
          };
        });

        console.log(
          `Claude scan started with ${images.length} image(s)`
        );

        const startedAt = Date.now();

        const result = await withTimeout(
          anthropicClient.messages.create({
            model: 'claude-sonnet-5',
            max_tokens: 1500,

            messages: [
              {
                role: 'user',
                content: [
                  {
                    type: 'text',
                    text: SCAN_PROMPT
                  },
                  ...imageContents
                ]
              }
            ]
          }),
          30000
        );

        console.log(
          `Claude scan completed in ${Date.now() - startedAt}ms`
        );

        const text =
          result.content?.find(
            block => block.type === 'text'
          )?.text || '';

        scanResult = parseAiJson(text);

      } catch (error) {
        console.error(
          'Claude scan error:',
          error
        );

        const status = Number(error?.status);

        return res
          .status(
            status >= 400 && status < 600
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
      validateScanResponse(scanResult);

      return res.json(scanResult);

    } catch (error) {
      console.error(
        'Scan validation error:',
        error
      );

      console.error(
        'Invalid scan response:',
        scanResult
      );

      return res.status(400).json({
        error: error.message
      });
    }

  } catch (error) {
    console.error(
      'Scan endpoint error:',
      error
    );

    return res.status(500).json({
      error:
        error?.message ||
        'Internal server error during scan'
    });
  }
});

// ======================================================
// LAYOUTS — STILL MOCK FOR NOW
// ======================================================

app.post('/api/layouts', async (req, res) => {
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

    if (!room || typeof room !== 'object') {
      return res.status(400).json({
        error: 'Invalid room data'
      });
    }

    if (!Array.isArray(furniture)) {
      return res.status(400).json({
        error: 'furniture must be an array'
      });
    }

    // Validate optional fields
    if (count !== undefined && (typeof count !== 'number' || !Number.isInteger(count) || count <= 0)) {
      return res.status(400).json({
        error: 'count must be a positive integer'
      });
    }

    if (clearanceCm !== undefined && (typeof clearanceCm !== 'number' || !Number.isFinite(clearanceCm) || clearanceCm < 0)) {
      return res.status(400).json({
        error: 'clearanceCm must be a non-negative number'
      });
    }

    // Defaults
    const effectiveCount = Math.min(count || 1, 3);
    const effectiveClearanceCm = clearanceCm || 75;

    const provider =
      planMode === 'premium'
        ? 'Claude'
        : 'Gemini';

    // Construct prompt for AI
    const prompt = LAYOUT_PROMPT + "\n\nInput:\n" + JSON.stringify({
      room,
      furniture,
      goals,
      constraints,
      count,
      clearanceCm
    }, null, 2);

    let layoutResult;

    if (planMode === 'free') {
      if (!geminiClient) {
        return res.status(503).json({
          error: 'Gemini API not configured'
        });
      }

      try {
        const startedAt = Date.now();

        const result = await withTimeout(
          geminiClient.models.generateContent({
            model: 'gemini-3.6-flash',
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: prompt
                  }
                ]
              }
            ],
            config: {
              responseMimeType: 'application/json'
            }
          }),
          30000
        );

        console.log(
          `Gemini 3.6 layout generation completed in ${Date.now() - startedAt}ms`
        );

        layoutResult = parseAiJson(result.text);
      } catch (error) {
        console.error(
          'Gemini layout error:',
          error
        );

        const status = Number(
          error?.status ||
          error?.code ||
          error?.error?.code
        );

        return res
          .status(
            status >= 400 && status < 600
              ? status
              : 503
          )
          .json({
            error:
              error?.message ||
              'Gemini layout generation failed'
          });
      }
    } else { // premium
      if (!anthropicClient) {
        return res.status(503).json({
          error: 'Anthropic API not configured'
        });
      }

      try {
        const startedAt = Date.now();

        const result = await withTimeout(
          anthropicClient.messages.create({
            model: 'claude-sonnet-5',
            max_tokens: 1500,
            messages: [
              {
                role: 'user',
                content: [
                  {
                    type: 'text',
                    text: prompt
                  }
                ]
              }
            ]
          }),
          30000
        );

        console.log(
          `Claude layout generation completed in ${Date.now() - startedAt}ms`
        );

        console.log(
  'Claude content types:',
  result.content?.map(block => block.type)
);

console.log(
  'Claude result:',
  JSON.stringify(result, null, 2)
);

        const text =
          result.content?.find(
            block => block.type === 'text'
          )?.text || '';

        layoutResult = parseAiJson(text);
      } catch (error) {
        console.error(
          'Claude layout error:',
          error
        );

        const status = Number(error?.status);

        return res
          .status(
            status >= 400 && status < 600
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

    // Validate the AI response structure
    validateLayoutResponse(layoutResult);

    // Semantic validation: ensure layout adheres to room constraints and furniture properties
    function validateLayoutSemantics(layoutResult, room, furniture) {
      if (!layoutResult || !layoutResult.layouts || !Array.isArray(layoutResult.layouts)) {
        throw new Error('Invalid layout result: missing layouts array');
      }

      // Build a map of input furniture by id for quick lookup
      const inputFurnitureMap = {};
      furniture.forEach(item => {
        if (!item.id || typeof item.id !== 'string') {
          throw new Error('Invalid input furniture: missing or non-string id');
        }
        if (inputFurnitureMap[item.id]) {
          throw new Error(`Duplicate furniture id in input: ${item.id}`);
        }
        inputFurnitureMap[item.id] = item;
      });

      layoutResult.layouts.forEach((layout, layoutIndex) => {
        if (!layout || typeof layout !== 'object') {
          throw new Error(`Invalid layout at index ${layoutIndex}: not an object`);
        }

        if (!layout.id || typeof layout.id !== 'string') {
          throw new Error(`Invalid layout at index ${layoutIndex}: missing or non-string id`);
        }

        if (!Array.isArray(layout.placements)) {
          throw new Error(`Invalid layout at index ${layoutIndex}: placements must be an array`);
        }

        if (typeof layout.clearanceCm !== 'number' || !Number.isFinite(layout.clearanceCm) || layout.clearanceCm < 0) {
          throw new Error(`Invalid layout at index ${layoutIndex}: clearanceCm must be a non-negative number`);
        }

        // Track which furniture ids we've seen in this layout
        const seenFurnitureIds = new Set();

        layout.placements.forEach((placement, placementIndex) => {
          if (!placement || typeof placement !== 'object') {
            throw new Error(`Invalid placement at layout ${layoutIndex}, placement ${placementIndex}: not an object`);
          }

          if (!placement.furnitureId || typeof placement.furnitureId !== 'string') {
            throw new Error(`Invalid placement at layout ${layoutIndex}, placement ${placementIndex}: missing or non-string furnitureId`);
          }

          const furnitureId = placement.furnitureId;
          if (seenFurnitureIds.has(furnitureId)) {
            throw new Error(`Duplicate furnitureId ${furnitureId} in layout ${layoutIndex}`);
          }
          seenFurnitureIds.add(furnitureId);

          // Check that this furniture id exists in the input
          const inputItem = inputFurnitureMap[furnitureId];
          if (!inputItem) {
            throw new Error(`Layout ${layoutIndex} contains furnitureId ${furnitureId} which is not in the input furniture`);
          }

          // Fixed furniture must retain its exact position and rotation
          if (inputItem.mobility === 'Fixed') {
            if (placement.x !== inputItem.xCm || placement.y !== inputItem.yCm || placement.rotation !== inputItem.rotation) {
              throw new Error(`Fixed furniture ${furnitureId} in layout ${layoutIndex} must retain its original position (xCm: ${inputItem.xCm}, yCm: ${inputItem.yCm}, rotation: ${inputItem.rotation}) but got (x: ${placement.x}, y: ${placement.y}, rotation: ${placement.rotation})`);
            }
          }

          // Ensure furniture is within room boundaries (assuming x, y are the center of the furniture)
          const halfWidth = inputItem.widthCm / 2;
          const halfDepth = inputItem.depthCm / 2;
          if (placement.x - halfWidth < 0 || placement.x + halfWidth > room.widthCm ||
              placement.y - halfDepth < 0 || placement.y + halfDepth > room.depthCm) {
            throw new Error(`Furniture ${furnitureId} in layout ${layoutIndex} exceeds room boundaries`);
          }

          // Check for overlap with other furniture in the same layout (axis-aligned bounding boxes, ignoring rotation for simplicity)
          // We'll compare with all other placements in this layout
          for (let j = 0; j < layout.placements.length; j++) {
            if (j === placementIndex) continue;
            const other = layout.placements[j];
            const otherId = other.furnitureId;
            const otherItem = inputFurnitureMap[otherId];
            if (!otherItem) {
              // This should not happen because we already validated that all furnitureIds are in input
              throw new Error(`Invalid furnitureId ${otherId} in layout ${layoutIndex}`);
            }
            const otherHalfWidth = otherItem.widthCm / 2;
            const otherHalfDepth = otherItem.depthCm / 2;
            // Check if the two rectangles overlap (assuming axis-aligned, centers at (x,y))
            if (placement.x + halfWidth > other.x - otherHalfWidth &&
                placement.x - halfWidth < other.x + otherHalfWidth &&
                placement.y + halfDepth > other.y - otherHalfDepth &&
                placement.y - halfDepth < other.y + otherHalfDepth) {
              throw new Error(`Furniture ${furnitureId} overlaps with furniture ${otherId} in layout ${layoutIndex}`);
            }
          }
        });

        // Ensure all input furniture ids are present in the layout (no missing furniture)
        const layoutFurnitureIds = new Set(layout.placements.map(p => p.furnitureId));
        furniture.forEach(item => {
          if (!layoutFurnitureIds.has(item.id)) {
            throw new Error(`Layout ${layoutIndex} is missing furniture id ${item.id} from input`);
          }
        });
      });
    }

    // Perform semantic validation
    validateLayoutSemantics(layoutResult, room, furniture);

    // Format response to match the expected contract
    return res.json({
      layouts: layoutResult.layouts,
      checked: layoutResult.layouts.length,
      aiProvider: provider,

      interpretedGoals:
        goals ? [String(goals)] : [],

      interpretedConstraints:
        constraints
          ? [String(constraints)]
          : [],

      unsupported: [],
      rejected: []
    });

  } catch (error) {
    console.error(
      'Layouts endpoint error:',
      error
    );

    return res.status(500).json({
      error:
        error?.message ||
        'Internal server error during layout generation'
    });
  }
});

// ======================================================
// FURNITURE ADVICE
// ======================================================

app.post('/api/furniture-advice', async (req, res) => {
  try {
    const {
      task,
      candidates
    } = req.body;

    if (!Array.isArray(candidates)) {
      return res.status(400).json({
        error: 'candidates must be an array'
      });
    }

    const recommendations =
      candidates
        .slice(0, 3)
        .map((candidate, index) => ({
          productId:
            candidate.product?.id ||
            `product-${index + 1}`,

          name:
            candidate.product?.name ||
            `Furniture Option ${index + 1}`,

          reason:
            `This option fits your ${
              task || 'room'
            }`,

          confidence:
            0.8 - index * 0.1
        }));

    return res.json({
      recommendations,
      provider: 'Claude'
    });

  } catch (error) {
    console.error(
      'Furniture advice error:',
      error
    );

    return res.status(500).json({
      error:
        'Internal server error during furniture advice'
    });
  }
});

// ======================================================
// ADJUST — STILL MOCK
// ======================================================

app.post('/api/adjust', async (req, res) => {
  try {
    const {
      layout,
      planMode
    } = req.body;

    if (!layout) {
      return res.status(400).json({
        error: 'Invalid layout'
      });
    }

    return res.json({
      layout,
      aiProvider:
        planMode === 'premium'
          ? 'Claude'
          : 'Gemini'
    });

  } catch (error) {
    console.error(
      'Adjust endpoint error:',
      error
    );

    return res.status(500).json({
      error:
        'Internal server error during layout adjustment'
    });
  }
});

// ======================================================
// CHAT
// ======================================================

app.post('/api/chat', async (req, res) => {
  try {
    const {
      messages,
      context
    } = req.body;

    if (!Array.isArray(messages)) {
      return res.status(400).json({
        error: 'messages must be an array'
      });
    }

    if (!anthropicClient) {
      return res.status(503).json({
        error:
          'Anthropic API not configured'
      });
    }

    const claudeMessages = [];

    if (context) {
      claudeMessages.push({
        role: 'user',
        content:
          `Room context:\n${JSON.stringify(context)}`
      });

      claudeMessages.push({
        role: 'assistant',
        content:
          'Understood.'
      });
    }

    for (const message of messages) {
      claudeMessages.push({
        role:
          message.role === 'assistant'
            ? 'assistant'
            : 'user',

        content:
          message.content ||
          message.text ||
          ''
      });
    }

    const result =
      await anthropicClient.messages.create({
        model: 'claude-sonnet-5',
        max_tokens: 1000,
        messages: claudeMessages
      });

    const reply =
      result.content?.find(
        block => block.type === 'text'
      )?.text ||
      'I could not generate a response.';

    return res.json({
      reply
    });

  } catch (error) {
    console.error(
      'Chat endpoint error:',
      error
    );

    const status =
      Number(error?.status) || 500;

    return res
      .status(
        status >= 400 && status < 600
          ? status
          : 500
      )
      .json({
        error:
          error?.message ||
          'Chat request failed'
      });
  }
});

// ======================================================
// UNKNOWN API ROUTES
// ======================================================

app.use('/api', (req, res) => {
  return res.status(404).json({
    error:
      `API route not found: ${req.method} ${req.originalUrl}`
  });
});

// ======================================================
// STATIC FRONTEND
// ======================================================

app.use(
  express.static(
    path.join(__dirname)
  )
);

// ======================================================
// SPA FALLBACK
// ======================================================

const isStaticAsset = (path) => {
  const staticExtensions = ['.js', '.css', '.map', '.wasm', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.txt', '.json'];
  return staticExtensions.some(ext => path.toLowerCase().endsWith(ext));
};

app.get('*', (req, res) => {
  if (isStaticAsset(req.path)) {
    return res.status(404).send('Not Found');
  }
  res.sendFile(
    path.join(
      __dirname,
      'index.html'
    )
  );
});

// ======================================================
// START SERVER
// ======================================================

app.listen(PORT, () => {
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
    'Free scan model: gemini-3.6-flash'
  );

  console.log(
    'Premium scan model: claude-sonnet-5'
  );
});