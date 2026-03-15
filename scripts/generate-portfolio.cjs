const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const prompts = [
  { name: 'graphic1.jpg', prompt: 'A high quality, professional poster design for a summer music festival, vibrant colors, neon lights, highly detailed, typography' },
  { name: 'graphic2.jpg', prompt: 'A sleek, modern corporate exhibition backdrop design, premium, dark theme with glowing purple accents' },
  { name: 'video1.jpg', prompt: 'A professional stage setup with a massive LED screen displaying abstract motion graphics, concert lighting, high energy' },
  { name: 'video2.jpg', prompt: 'A cinematic promotional video still of a luxury product launch, dramatic lighting, 4k resolution' },
  { name: 'holo1.jpg', prompt: 'A high quality 3D hologram fan projecting a glowing neon sneaker in mid-air, dark background, cyberpunk style, highly detailed' },
  { name: 'holo2.jpg', prompt: 'A futuristic 3D hologram floating above a pedestal in a dark room, glowing purple and pink light, highly realistic' }
];

async function generateImage(prompt, filename) {
  console.log(`Generating ${filename}...`);
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: prompt,
    });
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, 'base64');
        fs.writeFileSync(path.join(process.cwd(), 'public', 'portfolio', filename), buffer);
        console.log(`Saved ${filename}`);
        return true;
      }
    }
  } catch (e) {
    console.error(`Failed to generate ${filename}:`, e);
    return false;
  }
}

async function main() {
  const dir = path.join(process.cwd(), 'public', 'portfolio');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  for (const p of prompts) {
    await generateImage(p.prompt, p.name);
  }
}
main();
