import nodemailer from "nodemailer";
import { getSanityServerClient, getSanityServerWriteClient } from "@/lib/sanity/server-client";

const SHIPPING_CZK = 89;

export type CheckoutItem = {
  id: string;
  title: string;
  price: string;
  quantity: number;
};

export type CheckoutCustomer = {
  name: string;
  email: string;
  phone?: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
};

export type CreateOrderInput = {
  items: CheckoutItem[];
  customer: CheckoutCustomer;
  paymentMethod: "stripe" | "delivery" | "bank";
  stripePaymentId?: string;
  status?: "pending" | "paid" | "fulfilled" | "cancelled";
};

function priceToCzk(priceStr: string): number {
  const num = parseFloat(priceStr.replace(/[^\d.,]/g, "").replace(",", ".")) || 0;
  return priceStr.includes("€") ? Math.round(num * 27) : num;
}

function makeOrderNumber(): string {
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `SC-${Date.now()}-${rand}`;
}

function normalizeItems(items: CheckoutItem[]): CheckoutItem[] {
  return items
    .filter((item) => item.id && item.title && item.price && item.quantity > 0)
    .map((item) => ({
      ...item,
      quantity: Math.min(99, Math.max(1, item.quantity)),
    }));
}

function addressToText(customer: CheckoutCustomer): string {
  const line2 = `${customer.postalCode} ${customer.city}`;
  return [customer.street, line2, customer.country].filter(Boolean).join("\n");
}

export async function orderExistsByPaymentId(paymentId: string): Promise<boolean> {
  const client = getSanityServerClient();
  if (!client || !paymentId) return false;
  const existing = await client.fetch<{ _id: string } | null>(
    `*[_type == "order" && stripeSessionId == $paymentId][0]{ _id }`,
    { paymentId }
  );
  return Boolean(existing?._id);
}

export async function createOrderRecord(input: CreateOrderInput): Promise<{ orderNumber: string } | null> {
  const client = getSanityServerWriteClient();
  if (!client) return null;

  const items = normalizeItems(input.items);
  if (!items.length) return null;
  if (!input.customer.name?.trim() || !input.customer.email?.trim()) return null;

  const subtotal = items.reduce((sum, item) => sum + priceToCzk(item.price) * item.quantity, 0);
  const total = subtotal + SHIPPING_CZK;
  const orderNumber = makeOrderNumber();

  const sanityItems = items.map((item) => ({
    _type: "item",
    product: item.id ? { _type: "reference", _ref: item.id } : undefined,
    quantity: item.quantity,
    unitPrice: priceToCzk(item.price),
    currency: "CZK",
  }));

  await client.create({
    _type: "order",
    orderNumber,
    status: input.status ?? (input.paymentMethod === "stripe" ? "paid" : "pending"),
    customerName: input.customer.name.trim(),
    customerEmail: input.customer.email.trim(),
    shippingAddress: addressToText(input.customer),
    items: sanityItems,
    total,
    currency: "CZK",
    stripeSessionId: input.stripePaymentId,
  });

  return { orderNumber };
}

export async function sendOrderEmail(params: {
  to: string;
  orderNumber: string;
  paymentMethod: string;
  totalCzk: number;
}): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !params.to) return;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: CONTACT_FROM || SMTP_USER,
    to: params.to,
    subject: `Speed Coffee order confirmation (${params.orderNumber})`,
    text: [
      `Thank you for your order!`,
      ``,
      `Order number: ${params.orderNumber}`,
      `Payment method: ${params.paymentMethod}`,
      `Total: ${params.totalCzk} CZK`,
      ``,
      `You can track your order at: /orders`,
    ].join("\n"),
  });
}
