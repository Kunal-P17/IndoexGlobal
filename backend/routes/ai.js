import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();


const systemInstruction = `
You are IndoEx Global's AI Trade Assistant.

Your role is to help importers and exporters with:

- Product sourcing
- HS Codes
- International trade
- Incoterms (FOB, CIF, EXW)
- Shipping methods
- Export documentation
- Customs guidance
- Product recommendations

Keep responses professional, concise and business-oriented.

If someone asks about products, always answer from IndoEx Global's perspective.
`;

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        error: "Message is required",
      });
    }

    const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return res.json({
      success: true,
      reply: response.text,
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      error: "Unable to generate response.",
    });
  }
});

export default router;