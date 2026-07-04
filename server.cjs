var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var aiClient = null;
function getAi() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required to run the AI Sourcing Assistant.");
    }
    aiClient = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
app.post("/api/inquiry", (req, res) => {
  const { name, email, company, phone, industry, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Name, email, and message are required." });
  }
  console.log(`[B2B Lead Received]
    Name: ${name}
    Email: ${email}
    Company: ${company || "N/A"}
    Phone: ${phone || "N/A"}
    Industry: ${industry || "N/A"}
    Message: ${message}
  `);
  return res.json({
    success: true,
    message: "Thank you for contacting IndoEx Global. Your B2B Sourcing inquiry has been logged successfully and routed to our international trading desk. A dedicated Sourcing Manager will contact you with detailed specs and a quotation within 2-4 business hours."
  });
});
app.post("/api/query", async (req, res) => {
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
        temperature: 0.7
      }
    });
    return res.json({ success: true, text: response.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ success: false, error: error.message || "Internal server error." });
  }
});
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });
}
start();
//# sourceMappingURL=server.cjs.map
