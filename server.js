import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import Anthropic from '@anthropic-ai/sdk';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// AI clients
const geminiApiKey = process.env.GEMINI_API_KEY;
const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

let geminiClient = null;
let anthropicClient = null;

if (geminiApiKey) {
  try {
    geminiClient = new GoogleGenAI({ apiKey: geminiApiKey });
  } catch (error) {
    console.warn('Failed to initialize Gemini client:', error.message);
  }
}

if (anthropicApiKey) {
  try {
    anthropicClient = new Anthropic({ apiKey: anthropicApiKey });
  } catch (error) {
    console.warn('Failed to initialize Anthropic client:', error.message);
  }
}

const SCAN_PROMPT = `
Analyze all supplied room images as views of the same room.

Return ONLY valid JSON using this exact structure:

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
- Do not use Markdown code fences.
- Do not add explanatory text outside the JSON.
- Treat all images as views of the same room.
- Do not pretend exact real-world dimensions can be known from ordinary photos.
- Make internally consistent proportional estimates.
- Mention scale uncertainty in notes.
`;

function parseDataUrl(image) {
  if (typeof image !== 'string' || !image.trim()) {
    throw new Error('Each image must be a non-empty data URL');
  }

  const match = image.match(/^data:([^;,]+);base64,(.+)$/s);

  if (match) {
    return {
      mimeType: match[1],
      data: match[2]
    };
  }

  // Fallback for raw base64
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

  // Remove optional Markdown JSON fences
  cleaned = cleaned
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (error) {
    // Last attempt: extract first {...} object
    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');

    if (firstBrace !== -1 && lastBrace > firstBrace) {
      return JSON.parse(cleaned.slice(firstBrace, lastBrace + 1));
    }

    throw new Error('AI returned invalid JSON');
  }
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

  for (const note of data.notes) {
    if (typeof note !== 'string') {
      throw new Error('Invalid note');
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
      await geminiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: 'Reply only with OK'
      });

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

    if (!Array.isArray(images)) {
      return res.status(400).json({
        error: 'images must be an array'
      });
    }

    if (images.length === 0) {
      return res.status(400).json({
        error: 'at least one image is required'
      });
    }

    if (planMode !== 'free' && planMode !== 'premium') {
      return res.status(400).json({
        error: 'planMode must be either "free" or "premium"'
      });
    }

    const useGemini = planMode === 'free';
    const useClaude = planMode === 'premium';

    if (useGemini && !geminiClient) {
      return res.status(503).json({
        error: 'Gemini API not configured'
      });
    }

    if (useClaude && !anthropicClient) {
      return res.status(503).json({
        error: 'Anthropic API not configured'
      });
    }

    let scanResult;

    // FREE — GEMINI
    if (useGemini) {
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

        const result = await geminiClient.models.generateContent({
          model: 'gemini-3.8-flash',

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
        });

        try {
          scanResult = parseAiJson(result.text);
        } catch (parseError) {
          console.error(
            'Gemini JSON parse error:',
            parseError.message
          );

          console.error(
            'Gemini raw response:',
            result.text
          );

          return res.status(400).json({
            error: 'AI returned invalid JSON'
          });
        }

      } catch (error) {
        console.error('Gemini service error:', error);

        return res.status(503).json({
          error: error.message
        });
      }
    }

    // PREMIUM — CLAUDE
    if (useClaude) {
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

        const result = await anthropicClient.messages.create({
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
        });

        const text =
          result.content?.find(
            block => block.type === 'text'
          )?.text || '';

        try {
          scanResult = parseAiJson(text);
        } catch (parseError) {
          console.error(
            'Claude JSON parse error:',
            parseError.message
          );

          console.error(
            'Claude raw response:',
            text
          );

          return res.status(400).json({
            error: 'AI returned invalid JSON'
          });
        }

      } catch (error) {
        console.error('Claude service error:', error);

        return res.status(
          Number(error?.status) || 503
        ).json({
          error: error.message
        });
      }
    }

    try {
      validateScanResponse(scanResult);

      return res.json(scanResult);

    } catch (validationError) {
      console.error(
        'Scan validation error:',
        validationError
      );

      console.error(
        'Invalid scan result:',
        scanResult
      );

      return res.status(400).json({
        error: validationError.message
      });
    }

  } catch (error) {
    console.error('Scan endpoint error:', error);

    return res.status(500).json({
      error:
        error.message ||
        'Internal server error during scan processing'
    });
  }
});

// ======================================================
// LAYOUTS
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

    if (typeof count !== 'number' || count <= 0) {
      return res.status(400).json({
        error: 'count must be a positive number'
      });
    }

    // STILL MOCK FOR NOW
    const isPremium = planMode === 'premium';
    const provider = isPremium ? 'Claude' : 'Gemini';

    const layouts = [];

    for (let i = 0; i < Math.min(count, 3); i++) {
      layouts.push({
        id: `layout-${i + 1}`,

        placements: furniture.map((item, index) => ({
          furnitureId: item.id,
          x: 50 + index * 60,
          y: 50 + index * 40,
          rotation: index * 15
        })),

        clearanceCm: clearanceCm || 75,

        wallsUtilized:
          ['north', 'south', 'east', 'west']
            .slice(0, 2 + i)
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
    console.error('Layouts endpoint error:', error);

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
    const {
      task,
      budget,
      candidates
    } = req.body;

    if (!Array.isArray(candidates)) {
      return res.status(400).json({
        error: 'candidates must be an array'
      });
    }

    const recommendations = candidates
      .slice(0, Math.min(3, candidates.length))
      .map((candidate, index) => ({
        productId:
          candidate.product?.id ||
          `product-${index + 1}`,

        name:
          candidate.product?.name ||
          `Furniture Option ${index + 1}`,

        reason:
          `This option fits well with your ${
            task || 'room'
          } and budget`,

        confidence:
          0.8 - index * 0.1,

        dimensions: {
          widthCm: 100 + index * 20,
          depthCm: 50 + index * 10,
          heightCm: 80 + index * 15
        }
      }));

    return res.json({
      recommendations,
      provider: 'Claude'
    });

  } catch (error) {
    console.error(
      'Furniture advice endpoint error:',
      error
    );

    return res.status(500).json({
      error:
        'Internal server error during furniture advice generation'
    });
  }
});

// ======================================================
// ADJUST
// ======================================================

app.post('/api/adjust', async (req, res) => {
  try {
    const {
      room,
      sourceFurniture,
      layout,
      request,
      planMode
    } = req.body;

    if (!room || typeof room !== 'object') {
      return res.status(400).json({
        error: 'Invalid room data'
      });
    }

    if (!layout || typeof layout !== 'object') {
      return res.status(400).json({
        error: 'Invalid layout data'
      });
    }

    if (!request || typeof request !== 'string') {
      return res.status(400).json({
        error: 'request must be a non-empty string'
      });
    }

    const provider =
      planMode === 'premium'
        ? 'Claude'
        : 'Gemini';

    const adjustedLayout = {
      ...layout,
      placements:
        Array.isArray(layout.placements)
          ? layout.placements.map(item => ({
              ...item
            }))
          : []
    };

    adjustedLayout.placements.forEach(
      (placement, index) => {

        if (placement.x !== undefined) {
          placement.x +=
            index % 2 === 0 ? 5 : -5;
        }

        if (placement.y !== undefined) {
          placement.y +=
            index % 2 === 0 ? -5 : 5;
        }

        if (placement.rotation !== undefined) {
          placement.rotation += index * 5;
        }
      }
    );

    return res.json({
      layout: adjustedLayout,
      aiProvider: provider
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
          'Anthropic API not configured for chat'
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
          'Understood. I will use that room context when answering.'
      });
    }

    for (const message of messages) {
      const role =
        message.role === 'assistant'
          ? 'assistant'
          : 'user';

      claudeMessages.push({
        role,
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
          'Internal server error during chat processing'
      });
  }
});

// ======================================================
// UNKNOWN API ROUTES
// ======================================================

// Important:
// API routes should NEVER fall through to index.html.
// This prevents:
// Unexpected token '<', "<!DOCTYPE..." is not valid JSON

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

// SPA fallback comes LAST
app.get('*', (req, res) => {
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
    `Spacify Backend: http://localhost:${PORT}`
  );

  console.log(
    `Health: http://localhost:${PORT}/api/health`
  );

  console.log(
    `Providers: http://localhost:${PORT}/api/health/providers`
  );
});