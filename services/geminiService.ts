import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: In a real production app, you might proxy this through a backend to keep the key secret,
// but for this client-side demo, we use the env variable directly as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateScript = async (theme: string, emotionLevel: number) => {
  try {
    const emotionDescriptor = emotionLevel > 70 ? "passionate and high-energy" : emotionLevel > 40 ? "professional and steady" : "calm and analytical";
    
    const prompt = `
      You are an AI script writer for a professional news anchor.
      Task: Write a short broadcast script (approx 150 words) about the following theme: "${theme}".
      
      Tone requirements:
      - Style: Professional broadcast journalism.
      - Emotion: ${emotionDescriptor}.
      - Value Alignment: Ensure content is constructive, objective, and aligns with mainstream positive values.
      
      Output formatting:
      - Do not include "Title" or "Intro" labels. Just the spoken text.
      - Use clear, rhythmic sentences suitable for text-to-speech synthesis.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate script via AI Engine.");
  }
};
