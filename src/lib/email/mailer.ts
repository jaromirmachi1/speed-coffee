import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export type MailConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
};

export function getMailConfig(): MailConfig | null {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_FROM } = process.env;

  if (!SMTP_HOST?.trim() || !SMTP_PORT?.trim() || !SMTP_USER?.trim() || !SMTP_PASS?.trim()) {
    return null;
  }

  return {
    host: SMTP_HOST.trim(),
    port: Number(SMTP_PORT),
    user: SMTP_USER.trim(),
    pass: SMTP_PASS.trim(),
    from: (CONTACT_FROM || SMTP_USER).trim(),
  };
}

export function getMissingMailEnvVars(): string[] {
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_TO"] as const;
  return required.filter((key) => !process.env[key]?.trim());
}

export function createMailTransporter(config: MailConfig) {
  const options: SMTPTransport.Options = {
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    requireTLS: config.port === 587,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  };

  return nodemailer.createTransport(options);
}

export async function sendMail(params: {
  to: string;
  subject: string;
  text: string;
  html?: string;
  from?: string;
  replyTo?: string;
}): Promise<boolean> {
  const config = getMailConfig();
  if (!config || !params.to.trim()) {
    throw new Error(
      `Email is not configured. Missing: ${getMissingMailEnvVars().join(", ") || "CONTACT_TO"}`,
    );
  }

  const transporter = createMailTransporter(config);

  await transporter.sendMail({
    from: params.from ?? config.from,
    to: params.to,
    replyTo: params.replyTo,
    subject: params.subject,
    text: params.text,
    html: params.html,
  });

  return true;
}
