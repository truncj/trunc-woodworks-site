import { GoogleGenAI } from "@google/genai";

export const getDesignAdvice = async (userQuery: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY not found in environment");
    return "I can't connect to my design brain right now (API Key missing), but feel free to email me directly for advice!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert woodworking consultant for "Trunc Woodworks". 
      Your goal is to help a potential client brainstorm a custom furniture idea.
      The client says: "${userQuery}".
      
      Provide a friendly, professional suggestion in 2-3 sentences. 
      Suggest specific wood types (like Walnut, White Oak, Maple) and design features (mid-century, rustic, industrial).
      End by encouraging them to submit a formal request via the contact page.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 200,
      }
    });

    return response.text || "I'm having trouble generating a design idea right now. Please try again later.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "I'm currently offline for maintenance. Please contact me directly via the Contact page.";
  }
};