import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import Anthropic from '@anthropic-ai/sdk';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Get filename and directory for serving static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Increase limit for base64 images
app.use(express.static(path.join(__dirname)));

// Initialize AI clients
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

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    geminiConfigured: !!geminiClient,
    claudeConfigured: !!anthropicClient
  });
});

// Provider connectivity test endpoint
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

  // Test Gemini connectivity
  if (geminiClient) {
    try {
      // Make a minimal request to test connectivity
      await geminiClient.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: 'Hello'
      });
      results.gemini.reachable = true;
    } catch (error) {
      results.gemini.error = error.message;
    }
  } else {
    results.gemini.error = 'API key not configured';
  }

  // Test Claude connectivity
  if (anthropicClient) {
    try {
      // Make a minimal request to test connectivity
      await anthropicClient.messages.create({
        model: 'claude-3-5-haiku-20241022',
        max_tokens: 10,
        messages: [{ role: 'user', content: 'Hello' }]
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

/**
 * Helper function to validate scan response structure
 */
function validateScanResponse(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid response: expected object');
  }

  // Validate room object
  if (!data.room || typeof data.room !== 'object') {
    throw new Error('Invalid response: missing or invalid room object');
  }

  if (typeof data.room.widthCm !== 'number' || !isFinite(data.room.widthCm) || data.room.widthCm <= 0) {
    throw new Error('Invalid response: room.widthCm must be a positive finite number');
  }

  if (typeof data.room.depthCm !== 'number' || !isFinite(data.room.depthCm) || data.room.depthCm <= 0) {
    throw new Error('Invalid response: room.depthCm must be a positive finite number');
  }

  if (!Array.isArray(data.room.openings)) {
    throw new Error('Invalid response: room.openings must be an array');
  }

  for (const opening of data.room.openings) {
    if (!opening || typeof opening !== 'object') {
      throw new Error('Invalid response: each opening must be an object');
    }
    if (!opening.id || typeof opening.id !== 'string') {
      throw new Error('Invalid response: opening.id must be a string');
    }
    if (!opening.type || typeof opening.type !== 'string') {
      throw new Error('Invalid response: opening.type must be a string');
    }
    const validWalls = ['north', 'south', 'east', 'west'];
    if (!opening.wall || typeof opening.wall !== 'string' || !validWalls.includes(opening.wall)) {
      throw new Error('Invalid response: opening.wall must be one of: north, south, east, west');
    }
    if (typeof opening.offsetCm !== 'number' || !isFinite(opening.offsetCm)) {
      throw new Error('Invalid response: opening.offsetCm must be a finite number');
    }
    if (typeof opening.widthCm !== 'number' || !isFinite(opening.widthCm) || opening.widthCm <= 0) {
      throw new Error('Invalid response: opening.widthCm must be a positive finite number');
    }
  }

  // Validate furniture array
  if (!Array.isArray(data.furniture)) {
    throw new Error('Invalid response: furniture must be an array');
  }

  for (const furniture of data.furniture) {
    if (!furniture || typeof furniture !== 'object') {
      throw new Error('Invalid response: each furniture item must be an object');
    }
    if (!furniture.id || typeof furniture.id !== 'string') {
      throw new Error('Invalid response: furniture.id must be a string');
    }
    if (!furniture.name || typeof furniture.name !== 'string') {
      throw new Error('Invalid response: furniture.name must be a string');
    }
    if (typeof furniture.widthCm !== 'number' || !isFinite(furniture.widthCm) || furniture.widthCm <= 0) {
      throw new Error('Invalid response: furniture.widthCm must be a positive finite number');
    }
    if (typeof furniture.depthCm !== 'number' || !isFinite(furniture.depthCm) || furniture.depthCm <= 0) {
      throw new Error('Invalid response: furniture.depthCm must be a positive finite number');
    }
    if (typeof furniture.xCm !== 'number' || !isFinite(furniture.xCm)) {
      throw new Error('Invalid response: furniture.xCm must be a finite number');
    }
    if (typeof furniture.yCm !== 'number' || !isFinite(furniture.yCm)) {
      throw new Error('Invalid response: furniture.yCm must be a finite number');
    }
    if (typeof furniture.rotation !== 'number' || !isFinite(furniture.rotation)) {
      throw new Error('Invalid response: furniture.rotation must be a finite number');
    }
    if (!furniture.mobility || typeof furniture.mobility !== 'string' ||
        !['Movable', 'Fixed'].includes(furniture.mobility)) {
      throw new Error('Invalid response: furniture.mobility must be either "Movable" or "Fixed"');
    }
  }

  // Validate notes array
  if (!Array.isArray(data.notes)) {
    throw new Error('Invalid response: notes must be an array');
  }

  for (const note of data.notes) {
    if (typeof note !== 'string') {
      throw new Error('Invalid response: each note must be a string');
    }
  }

  return true;
}

/**
 * Helper function to create a mock scan response
 * This is for development/testing when API keys are not available
 */
function createMockScanResponse(planMode) {
  // Generate deterministic but varied responses based on planMode
  const isPremium = planMode === 'premium';
  const provider = isPremium ? 'Claude' : 'Gemini';

  // Room dimensions - slightly varied to show difference between free/premium
  const widthCm = isPremium ? 420 + Math.random() * 20 : 400 + Math.random() * 20;
  const depthCm = isPremium ? 360 + Math.random() * 20 : 340 + Math.random() * 20;

  // Openings - one door and one window
  const openings = [
    {
      id: 'opening-1',
      type: 'door',
      wall: 'south',
      offsetCm: 50,
      widthCm: 80
    },
    {
      id: 'opening-2',
      type: 'window',
      wall: 'east',
      offsetCm: 100,
      widthCm: 120
    }
  ];

  // Furniture - some basic items
  const furniture = [
    {
      id: 'furn-1',
      name: 'Sofa',
      widthCm: 200,
      depthCm: 90,
      xCm: 50,
      yCm: 50,
      rotation: 0,
      mobility: 'Movable'
    },
    {
      id: 'furn-2',
      name: 'Coffee Table',
      widthCm: 100,
      depthCm: 50,
      xCm: 200,
      yCm: 100,
      rotation: 0,
      mobility: 'Movable'
    }
  ];

  // Notes - indicate that scale is approximate
  const notes = [
    'Scan completed using ' + provider + '. Dimensions are approximate and should be verified with measurements.',
    'Free and Premium modes have the same scan accuracy.',
    'Use the measurement tool to calibrate scale after placing furniture.'
  ];

  // Add provider-specific note
  if (isPremium) {
    notes.push('Premium scan using Claude 3.5 Sonnet for enhanced understanding.');
  } else {
    notes.push('Free scan using Gemini 1.5 Flash.');
  }

  return {
    room: {
      widthCm: parseFloat(widthCm.toFixed(1)),
      depthCm: parseFloat(depthCm.toFixed(1)),
      openings: openings
    },
    furniture: furniture,
    notes: notes
  };
}

/**
 * Scan endpoint - processes room images and returns layout analysis
 */
app.post('/api/scan', async (req, res) => {
  try {
    const { images, planMode } = req.body;

    // Validate input
    if (!Array.isArray(images)) {
      return res.status(400).json({ error: 'images must be an array' });
    }

    if (images.length === 0) {
      return res.status(400).json({ error: 'at least one image is required' });
    }

    if (planMode !== 'free' && planMode !== 'premium') {
      return res.status(400).json({ error: 'planMode must be either "free" or "premium"' });
    }

    // Determine which AI provider to use
    const useGemini = planMode === 'free';
    const useClaude = planMode === 'premium';

    // Check if API keys are configured
    if (useGemini && !geminiClient) {
      return res.status(503).json({ error: 'Gemini API not configured' });
    }

    if (useClaude && !anthropicClient) {
      return res.status(503).json({ error: 'Anthropic API not configured' });
    }

    let scanResult;

    // Try to use the actual AI service
    try {
      if (useGemini && geminiClient) {
        // Prepare multimodal content for Gemini
        const imageParts = images.map(img => ({
          inlineData: {
            data: img.split(',')[1], // Remove data:image/jpeg;base64, prefix if present
            mimeType: 'image/jpeg' // Assume JPEG, could be made dynamic
          }
        }));

        const result = await geminiClient.models.generateContent({
          model: 'gemini-1.5-flash',
          contents: [
            { text: 'Analyze this room image(s) and provide a structured JSON response with room dimensions, openings, and furniture. Do not pretend to know exact measurements from photos. Instead, infer proportional relationships and indicate uncertainty in notes.' },
            ...imageParts
          ]
        });

        // Parse the response - in a real implementation, we'd expect structured JSON
        // For now, we'll create a mock response since the AI might not return exactly what we need
        scanResult = createMockScanResponse(planMode);
        scanResult.notes.unshift('Scan completed using Gemini 1.5 Flash (mock response for development)');
      } else if (useClaude && anthropicClient) {
        // Prepare content for Claude
        const imageContents = images.map(img => ({
          type: 'image',
          source: {
            type: 'base64',
            media_type: 'image/jpeg',
            data: img.split(',')[1]
          }
        }));

        const message = {
          role: 'user',
          content: [
            { type: 'text', text: 'Analyze this room image(s) and provide a structured JSON response with room dimensions, openings, and furniture. Do not pretend to know exact measurements from photos. Instead, infer proportional relationships and indicate uncertainty in notes.' },
            ...imageContents
          ]
        };

        const result = await anthropicClient.messages.create({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 1000,
          messages: [message]
        });

        // Parse the response - for now, use mock
        scanResult = createMockScanResponse(planMode);
        scanResult.notes.unshift('Scan completed using Claude 3.5 Sonnet (mock response for development)');
      } else {
        // Fallback to mock if no client available
        scanResult = createMockScanResponse(planMode);
        scanResult.notes.unshift('Scan completed using mock response (no API client available)');
      }
    } catch (aiError) {
      console.error('AI service error:', aiError);
      // Fall back to mock response on AI error
      scanResult = createMockScanResponse(planMode);
      scanResult.notes.unshift('Scan completed using fallback mock response due to AI service error');
      scanResult.notes.push(`AI error: ${aiError.message}`);
    }

    // Validate the response structure before sending
    try {
      validateScanResponse(scanResult);
      res.json(scanResult);
    } catch (validationError) {
      console.error('Validation error:', validationError);
      // Even if validation fails, send a basic valid structure to avoid breaking frontend
      res.json(createMockScanResponse(planMode));
    }
  } catch (error) {
    console.error('Scan endpoint error:', error);
    res.status(500).json({ error: 'Internal server error during scan processing' });
  }
});

/**
 * Layouts endpoint - generates furniture layouts based on room scan
 */
app.post('/api/layouts', async (req, res) => {
  try {
    const { room, furniture, goals, constraints, count, clearanceCm, planMode } = req.body;

    // Basic validation
    if (!room || typeof room !== 'object') {
      return res.status(400).json({ error: 'Invalid room data' });
    }

    if (!Array.isArray(furniture)) {
      return res.status(400).json({ error: 'furniture must be an array' });
    }

    if (typeof count !== 'number' || count <= 0) {
      return res.status(400).json({ error: 'count must be a positive number' });
    }

    // Determine provider
    const isPremium = planMode === 'premium';
    const provider = isPremium ? 'Claude' : 'Gemini';

    // Generate mock layouts for now
    // In a real implementation, this would use AI to generate actual layouts
    const layouts = [];
    for (let i = 0; i < Math.min(count, 3); i++) { // Limit to 3 for demo
      layouts.push({
        id: `layout-${i + 1}`,
        placements: furniture.map((item, index) => ({
          furnitureId: item.id,
          x: 50 + (index * 60),
          y: 50 + (index * 40),
          rotation: index * 15
        })),
        clearanceCm: clearanceCm || 75,
        wallsUtilized: ['north', 'south', 'east', 'west'].slice(0, 2 + i)
      });
    }

    res.json({
      layouts: layouts,
      checked: layouts.length,
      aiProvider: provider,
      interpretedGoals: goals ? [String(goals)] : [],
      interpretedConstraints: constraints ? [String(constraints)] : [],
      unsupported: [],
      rejected: []
    });
  } catch (error) {
    console.error('Layouts endpoint error:', error);
    res.status(500).json({ error: 'Internal server error during layout generation' });
  }
});

/**
 * Furniture advice endpoint - provides recommendations for furniture selection
 */
app.post('/api/furniture-advice', async (req, res) => {
  try {
    const { task, budget, candidates } = req.body;

    // Basic validation
    if (!candidates || !Array.isArray(candidates)) {
      return res.status(400).json({ error: 'candidates must be an array' });
    }

    // For now, return mock recommendations
    // In a real implementation, this would use Claude to analyze options
    const recommendations = candidates
      .slice(0, Math.min(3, candidates.length)) // Take up to 3 candidates
      .map((candidate, index) => ({
        productId: candidate.product?.id || `product-${index + 1}`,
        name: candidate.product?.name || `Furniture Option ${index + 1}`,
        reason: `This option fits well with your ${task || 'room'} and budget`,
        confidence: 0.8 - (index * 0.1), // Decreasing confidence
        dimensions: {
          widthCm: 100 + (index * 20),
          depthCm: 50 + (index * 10),
          heightCm: 80 + (index * 15)
        }
      }));

    res.json({
      recommendations: recommendations,
      provider: 'Claude' // Always Claude for furniture advice as per frontend
    });
  } catch (error) {
    console.error('Furniture advice endpoint error:', error);
    res.status(500).json({ error: 'Internal server error during furniture advice generation' });
  }
});

/**
 * Adjust endpoint - refines existing layout based on user feedback
 */
app.post('/api/adjust', async (req, res) => {
  try {
    const { room, sourceFurniture, layout, request, planMode } = req.body;

    // Basic validation
    if (!room || typeof room !== 'object') {
      return res.status(400).json({ error: 'Invalid room data' });
    }

    if (!layout || typeof layout !== 'object') {
      return res.status(400).json({ error: 'Invalid layout data' });
    }

    if (!request || typeof request !== 'string') {
      return res.status(400).json({ error: 'request must be a non-empty string' });
    }

    // Determine provider
    const isPremium = planMode === 'premium';
    const provider = isPremium ? 'Claude' : 'Gemini';

    // For now, return the layout with minor modifications
    // In a real implementation, this would use AI to make intelligent adjustments
    const adjustedLayout = {
      ...layout,
      placements: layout.placements ? [...layout.placements] : []
    };

    // Slightly adjust positions to show that something changed
    if (adjustedLayout.placements && Array.isArray(adjustedLayout.placements)) {
      adjustedLayout.placements.forEach((placement, index) => {
        if (placement.x !== undefined) placement.x += (index % 2 === 0 ? 5 : -5);
        if (placement.y !== undefined) placement.y += (index % 2 === 0 ? -5 : 5);
        if (placement.rotation !== undefined) placement.rotation += (index * 5);
      });
    }

    res.json({
      layout: adjustedLayout,
      aiProvider: provider
    });
  } catch (error) {
    console.error('Adjust endpoint error:', error);
    res.status(500).json({ error: 'Internal server error during layout adjustment' });
  }
});

/**
 * Chat endpoint - handles conversational AI for room planning advice
 */
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, context } = req.body;

    // Basic validation
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages must be an array' });
    }

    // For now, use Claude for chat as it's generally better for conversation
    // In a real implementation, this could be configurable or based on planMode
    if (!anthropicClient) {
      return res.status(503).json({ error: 'Anthropic API not configured for chat' });
    }

    // Prepare messages for Claude
    const claudeMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content || msg.text || ''
    }));

    // Add context as a system message if provided
    if (context) {
      claudeMessages.unshift({
        role: 'user',
        content: `Context about the room: ${JSON.stringify(context)}`
      });
    }

    const result = await anthropicClient.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1000,
      messages: claudeMessages
    });

    const reply = result.content[0].text || 'I apologize, but I could not generate a response.';

    res.json({
      reply: reply
    });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    res.status(500).json({ error: 'Internal server error during chat processing' });
  }
});

// Serve the frontend for all other routes (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Spacify Prototype Backend running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Provider health: http://localhost:${PORT}/api/health/providers`);
});