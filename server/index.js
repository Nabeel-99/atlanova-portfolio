import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:5173"],
  })
);

const resend = new Resend(process.env.RESEND_API_KEY);
app.post("/api/send-email", async (req, res) => {
  try {
    const { fullname, email, phone, message } = req.body;
    await resend.emails.send({
      from: `Altanova Global Ltd <contact@altanovagloballtd.com>`,
      to: process.env.EMAIL,
      subject: "Inquiry about Altanova Global Ltd",
      replyTo: email,
      html: ` 
      
      <p>Inquiry about Altanova Global Ltd:</p>
      
      <p>
      ${message}
      </p>
      
      <p>
      – ${fullname}<br/>
      ${email}<br/>
      ${phone}
            `,
    });

    await resend.emails.send({
      from: `noreply@altanovagloballtd.com`,
      to: email,
      subject: "Thank you for contacting Altanova Global Ltd",
      html: `
        <p>Dear ${fullname},</p>
        <p>We’ve received your inquiry and will get back to you within 24 hours.</p>
        <p>Thank you for reaching out to Altanova Global Ltd.</p>
        <p>Best regards,<br/>
        Altanova Global Ltd Team</p>

      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error sending email" });
  }
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
