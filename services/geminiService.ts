import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// Note: In a real production app, you might want to proxy this through a backend to hide the key,
// but for this demo/SPA requirement, we use it directly as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are Thomas Faulkner, a master carpenter and lead design consultant for "Faulkner Remodeling & Carpentry". 
The business is a high-end, family-owned company known for serenity, craftsmanship, and sustainable materials.
Your tone should be warm, professional, knowledgeable, and serene. 
Avoid slang. Use terminology appropriate for high-end carpentry (e.g., joinery, grain, finish, sustainability).
Help users with quick questions about home remodeling, wood selection, or design trends.
Keep answers concise (under 100 words) unless asked for a detailed explanation.
`;

export const sendChatMessage = async (history: { role: string; parts: { text: string }[] }[], userMessage: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "I apologize, but I am currently unable to access my design references (API Key missing). Please contact the office directly.";
    }

    const model = 'gemini-2.5-flash';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Creative but grounded
      },
      history: history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message: userMessage });
    
    return response.text || "I'm pondering that specific detail. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, I seem to be having trouble connecting to our design database at the moment. Please try again shortly.";
  }
};