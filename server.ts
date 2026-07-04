import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Gemini AI client to avoid crash if API key is missing during container boot
let aiClient: GoogleGenAI | null = null;
function getAi() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required to run the AI Sourcing Assistant.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// B2B Inquiry lead handler
app.post("/api/inquiry", (req: any, res: any) => {
  const { name, email, company, phone, industry, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Name, email, and message are required." });
  }
  
  console.log(`[B2B Lead Received]
    Name: ${name}
    Email: ${email}
    Company: ${company || 'N/A'}
    Phone: ${phone || 'N/A'}
    Industry: ${industry || 'N/A'}
    Message: ${message}
  `);

  return res.json({
    success: true,
    message: "Thank you for contacting IndoEx Global. Your B2B Sourcing inquiry has been logged successfully and routed to our international trading desk. A dedicated Sourcing Manager will contact you with detailed specs and a quotation within 2-4 business hours."
  });
});

// AI Sourcing Copilot query handler
app.post("/api/query", async (req: any, res: any) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ success: false, error: "Message is required." });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        success: true,
        text: "Hello! I am IndoEx Global's B2B Sourcing AI Copilot. It looks like the Gemini API Key is not configured yet in the Secrets panel. Once configured, I will be fully active to analyze your bulk specifications, suggest matching HS codes, estimate container cargo metrics, and outline international customs and compliance documentations for your shipments!"
      });
    }

    const ai = getAi();
    const systemInstruction = `
You are IndoEx Global's Elite AI Trade & Sourcing Copilot (B2B Sourcing Agent).
Your role is to help international business buyers find high-quality products, estimate shipping cargo details, understand HS Codes, customs documentation, import-export regulatory standards, and draft request specs.
Be highly professional, corporate, and helpful. Use clear B2B trade terminology (FOB, CIF, EXW, Bill of Lading, SGS Inspections, Customs Clearance).
Provide detailed, comprehensive answers with well-formatted markdown lists, small tables, or bold key terms.

    Highlight IndoEx Global's expertise in:
    - Spices (Premium Bold Black Pepper, High-Curcumin Alleppey Turmeric, Extra Bold Green Cardamom)
    - Dehydrated Powder (Premium Onion Powder, Dehydrated Garlic Powder, Fine Ginger Powder)
    - Cereals (Aged Long-Grain Basmati Rice, Non-GMO Milling Wheat, Premium Yellow Maize/Corn)
    - Construction Material (Double Charged Glazed Vitrified Tiles, Polished Natural Granite Slabs, Hot-Dipped Galvanized Steel Coils)

IndoEx Global provides end-to-end global trade management, including:
- Professional supplier audit and factory verification
- On-site SGS/Bureau Veritas inspections and strict QC
- Customs clearance brokerage in major hubs (USA, Rotterdam, Singapore, Shanghai, Dubai, Mumbai)
- Multi-modal global logistics: FCL (Full Container Load), LCL (Less Container Load) ocean freight, express air cargo
- State-of-the-art climate-controlled warehousing and supply-chain consulting.

Maintain a polite, helpful B2B advisor persona. Let's make global trade simple, fast, and secure.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return res.json({ success: true, text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ success: false, error: error.message || "Internal server error." });
  }
});

// Vite server startup / static asset delivery
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });
}

start();
