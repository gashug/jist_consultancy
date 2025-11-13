import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, businessName, service, message } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Basic sanitisation / trimming
    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safePhone = String(phone).trim();
    const safeBusinessName = businessName ? String(businessName).trim() : "";
    const safeService = service ? String(service).trim() : "Not specified";
    const safeMessage = message ? String(message).trim() : "";

    // Configure via environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const mailText = `
New lead from Jist Consultancy website:

Name: ${safeName}
Email: ${safeEmail}
Phone: ${safePhone}
Business: ${safeBusinessName || "N/A"}
Service area: ${safeService}

Message:
${safeMessage}
`;

    await transporter.sendMail({
      from: `"Jist Consultancy Website" <${process.env.FROM_EMAIL}>`,
      to: process.env.LEAD_NOTIFICATIONS_EMAIL || process.env.FROM_EMAIL,
      subject: `New enquiry: ${safeService} – ${safeName}`,
      text: mailText
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}