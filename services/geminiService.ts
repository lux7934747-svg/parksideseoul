
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export async function askConcierge(question: string): Promise<string> {
  if (!apiKey) return "API Key is missing.";
  
  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are an exclusive AI Concierge for THE PARKSIDE SEOUL, a high-end luxury MXD (Mixed-use Development) in Hannam-dong, Seoul. 
        The project is Seoul's first MXD, featuring The Parkside Suite (residential), Rosewood Seoul (hotel), premium retail, and office spaces.
        Location: Yongsan-gu Hannam-dong (former Susong-bu site). 
        Key highlights: Permanent Yongsan Park views, Rosewood Hotel services, Landmark design, "Universe" concept. 
        Your tone must be "Majestic, Polite, Minimalist, and Timeless". 
        Answer in Korean primarily, unless asked in English. 
        Emphasize the "Universe" concept - creating a unique world beyond just a wealthy neighborhood.`,
        temperature: 0.7,
      },
    });

    return response.text || "죄송합니다. 요청을 처리할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "현재 컨시어지 서비스가 원활하지 않습니다. 잠시 후 다시 시도해주세요.";
  }
}
