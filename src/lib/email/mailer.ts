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

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return {
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    user: SMTP_USER,
    pass: SMTP_PASS,
    from: CONTACT_FROM || SMTP_USER,
  };
}

export function createMailTransporter(config: MailConfig) {
  const options: SMTPTransport.Options = {
    host: config.host,
    port: config.port,
    secure: config.port === 465,
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
  from?: string;
}): Promise<boolean> {
  const config = getMailConfig();
  if (!config || !params.to.trim()) {
    return false;
  }

  const transporter = createMailTransporter(config);

  await transporter.sendMail({
    from: params.from ?? config.from,
    to: params.to,
    subject: params.subject,
    text: params.text,
  });

  return true;
}
