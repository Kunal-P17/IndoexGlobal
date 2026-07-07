import express from "express";
import { sendInquiryEmail } from "../services/emailService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      phone,
      industry,
      message
    } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, Email and Message are required."
      });
    }

    // Email sending will be added here
    await sendInquiryEmail(req.body);

    return res.json({
      success: true,
      message: "Inquiry received successfully."
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Internal Server Error"
    });
  }
});

export default router;