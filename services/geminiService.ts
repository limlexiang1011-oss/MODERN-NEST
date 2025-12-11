import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is missing. AI features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getDesignAdvice = async (
  userQuery: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "I'm sorry, I cannot connect to the design server right now. Please check your API key.";

  try {
    // We construct a prompt that includes context about the store
    const systemInstruction = `You are "Nestor", a sophisticated and helpful interior design consultant for "Modern Nest Furniture". 
    Your tone is warm, professional, and knowledgeable about interior design trends (Minimalism, Japandi, Mid-Century Modern).
    Keep your answers concise (under 100 words) and helpful. 
    If a user asks about products, suggest types of furniture (e.g., "a velvet sectional" or "oak dining table") that fit their vibe.
    Do not mention specific URLs or prices unless explicitly known, just focus on style advice.`;

    const model = 'gemini-2.5-flash';
    
    // Construct the chat history for the prompt
    // Ideally we would use ai.chats.create() for a real persistent session, 
    // but for this stateless service call pattern we can append history or use chat mode.
    // Let's use the chat helper for simplicity.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: userQuery });
    return result.text || "I'm pondering that design choice... could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble visualizing that right now. Please try again later.";
  }
};