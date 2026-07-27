import { NextResponse } from "next/server";
import {
  getMailConfig,
  getMissingMailEnvVars,
  sendMail,
} from "@/lib/email/mailer";

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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RentalInquiryPayload;

    if (!body.name?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    const missing = getMissingMailEnvVars();
    if (!getMailConfig() || missing.length > 0) {
      console.error("Missing SMTP configuration:", missing.join(", "));
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_TO.",
          missing,
        },
        { status: 500 },
      );
    }

    const interestedIn =
      body.variant === "trailer"
        ? "Rent coffee trailer with service"
        : "Event in Speed Coffee House";

    const subject = `New rental inquiry (${
      body.variant === "trailer" ? "Coffee trailer" : "Event in Speed Coffee House"
    })`;

    const rows: [string, string][] = [
      ["Name", body.name],
      ["Email", body.email],
      ["Company", body.company || "-"],
      ["Interested in", interestedIn],
      ["Country", body.country || "-"],
      ["City", body.city || "-"],
      ["Date from", body.dateFrom || "-"],
      ["Date to", body.dateTo || "-"],
      ["Note", body.note || "-"],
    ];

    const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.5;">
        <h2 style="margin: 0 0 16px;">New rental inquiry</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
          ${rows
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: 600; width: 140px;">${escapeHtml(label)}</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">${escapeHtml(value).replaceAll("\n", "<br/>")}</td>
            </tr>`,
            )
            .join("")}
        </table>
      </div>
    `;

    await sendMail({
      to: process.env.CONTACT_TO!,
      subject,
      text,
      html,
      replyTo: body.email.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error while handling rental inquiry:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to send inquiry email.",
      },
      { status: 500 },
    );
  }
}
