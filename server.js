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
          model: 'gemini-3.5-flash',
          contents: 'Reply only with OK'
        }),
        15000
      );

      results.gemini.reachable = true;
    } catch (error) {
      results.gemini.error = error.message;
    }
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

    // FREE = GEMINI
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
          `Gemini scan started: ${images.length} images`
        );

        const start = Date.now();

        const result = await withTimeout(
          geminiClient.models.generateContent({
            model: 'gemini-3.5-flash',

            contents: [
              {
                role: 'user',
                parts: [
                  { text: SCAN_PROMPT },
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
          `Gemini scan finished in ${Date.now() - start}ms`
        );

        scanResult = parseAiJson(result.text);

      } catch (error) {
        console.error(
          'Gemini scan error:',
          error
        );

        return res.status(
          Number(error?.status || error?.code) || 503
        ).json({
          error:
            error?.message ||
            'Gemini scan failed'
        });
      }
    }

    // PREMIUM = CLAUDE
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
          `Claude scan started: ${images.length} images`
        );

        const start = Date.now();

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
          `Claude scan finished in ${Date.now() - start}ms`
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

        return res.status(
          Number(error?.status) || 503
        ).json({
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
// LAYOUTS — STILL MOCK
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

    const provider =
      planMode === 'premium'
        ? 'Claude'
        : 'Gemini';

    const layouts = [];

    for (
      let i = 0;
      i < Math.min(count || 1, 3);
      i++
    ) {
      layouts.push({
        id: `layout-${i + 1}`,

        placements: furniture.map(
          (item, index) => ({
            furnitureId: item.id,
            x: 50 + index * 60,
            y: 50 + index * 40,
            rotation: index * 15
          })
        ),

        clearanceCm: clearanceCm || 75
      });
    }

    return res.json({
      layouts,
      checked: layouts.length,
      aiProvider: provider,
      interpretedGoals:
        goals ? [String(goals)] : [],
      interpretedConstraints:
        constraints ? [String(constraints)] : [],
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
        'Internal server error during layout generation'
    });
  }
});

// ======================================================
// FURNITURE ADVICE
// ======================================================

app.post('/api/furniture-advice', async (req, res) => {
  try {
    const { task, candidates } = req.body;

    if (!Array.isArray(candidates)) {
      return res.status(400).json({
        error: 'candidates must be an array'
      });
    }

    const recommendations = candidates
      .slice(0, 3)
      .map((candidate, index) => ({
        productId:
          candidate.product?.id ||
          `product-${index + 1}`,

        name:
          candidate.product?.name ||
          `Furniture Option ${index + 1}`,

        reason:
          `This option fits your ${task || 'room'}`,

        confidence:
          0.8 - index * 0.1
      }));

    res.json({
      recommendations,
      provider: 'Claude'
    });

  } catch (error) {
    res.status(500).json({
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
        error: 'Anthropic API not configured'
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

    return res.status(
      Number(error?.status) || 500
    ).json({
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
  res.status(404).json({
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

app.get('*', (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      'index.html'
    )
  );
});

// ======================================================
// START
// ======================================================

app.listen(PORT, () => {
  console.log(
    `Spacify Backend: http://localhost:${PORT}`
  );

  console.log(
    `Health: http://localhost:${PORT}/api/health`
  );

  console.log(
    `Providers: http://localhost:${PORT}/api/health/providers`
  );
});