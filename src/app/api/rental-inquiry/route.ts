import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface RentalInquiryPayload {
  name: string;
  email: string;
  company?: string;
  variant: "trailer" | "event";
  country?: string;
  city?: string;
  dateFrom?: string;
  dateTo?: string;
  note?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RentalInquiryPayload;

    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO,
      CONTACT_FROM,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      console.error("Missing SMTP configuration environment variables.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `New rental inquiry (${body.variant === "trailer" ? "Coffee trailer" : "Event in Speed Coffee House"})`;

    const lines = [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Company: ${body.company || "-"}`,
      `Interested in: ${
        body.variant === "trailer"
          ? "Rent coffee trailer with service"
          : "Event in Speed Coffee House"
      }`,
      `Country: ${body.country || "-"}`,
      `City: ${body.city || "-"}`,
      `Date from: ${body.dateFrom || "-"}`,
      `Date to: ${body.dateTo || "-"}`,
      "",
      "Note:",
      body.note || "-",
    ];

    await transporter.sendMail({
      from: CONTACT_FROM || SMTP_USER,
      to: CONTACT_TO,
      subject,
      text: lines.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error while handling rental inquiry:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry email." },
      { status: 500 },
    );
  }
}

