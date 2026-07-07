import { Resend } from "resend";
import { inquiryEmailTemplate } from "../utils/emailTemplate.js";

export async function sendInquiryEmail(data) {

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = inquiryEmailTemplate(data);

    // 📩 Email to IndoEx Global
    await resend.emails.send({
        from: `IndoEx Global <${process.env.FROM_EMAIL}>`,
        to: process.env.TO_EMAIL,
        replyTo: data.email,
        subject: `🌍 New B2B Inquiry from ${data.name}`,
        html
    });

    
    // 📩 Auto acknowledgement email
    await resend.emails.send({
        from: `IndoEx Global <${process.env.FROM_EMAIL}>`,
        to: data.email,
        subject: "Thank you for contacting IndoEx Global",
        html: `
            <h2>Dear ${data.name},</h2>

            <p>Thank you for contacting <b>IndoEx Global</b>.</p>

            <p>We have successfully received your sourcing inquiry.</p>

            <p>
                Our international trade team will contact you within
                <b>2–4 business hours.</b>
            </p>

            <hr>

            <p>
                <b>IndoEx Global</b><br>
                🌍 Built on Trust. Driven by Trade.<br>
                📧 info@indoexglobal.in
            </p>
        `
    });

     
}