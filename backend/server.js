import dotenv from "dotenv";
dotenv.config();
console.log("RESEND KEY:", process.env.RESEND_API_KEY);
console.log("Gemini Key:", process.env.GEMINI_API_KEY);
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import inquiryRoute from "./routes/inquiry.js";
import aiRoute from "./routes/ai.js";

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

app.use("/api/inquiry", inquiryRoute);
app.use("/api/query", aiRoute);

app.get("/", (req, res) => {
  res.send("✅ IndoEx Global Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});