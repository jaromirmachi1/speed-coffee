import { randomUUID } from "node:crypto";
import { sendMail } from "@/lib/email/mailer";
import { buildOrderConfirmationEmail } from "@/lib/email/orderConfirmation";
import { getSanityServerClient, getSanityServerWriteClient } from "@/lib/sanity/server-client";
import {
  priceToCzk,
  orderTotalCzk,
  type CheckoutPaymentMethod,
} from "@/lib/checkout/pricing";

export type CheckoutItem = {
  id: string;
  product_id?: string;
  title: string;
  price: string;
  quantity: number;
  variantTitle?: string;
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
  paymentMethod: CheckoutPaymentMethod;
  stripePaymentId?: string;
  status?: "pending" | "paid" | "fulfilled" | "cancelled";
};

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

function resolveSanityProductId(item: CheckoutItem): string | undefined {
  const candidate = item.product_id ?? item.id;
  if (!candidate) return undefined;
  return candidate.includes("::") ? candidate.split("::")[0] : candidate;
}

function parseVariantTitle(title: string): string | undefined {
  const match = title.match(/\(([^)]+)\)\s*$/);
  return match?.[1];
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
  const total = orderTotalCzk(subtotal, input.paymentMethod);
  const orderNumber = makeOrderNumber();

  const sanityItems = items.map((item) => {
    const productRef = resolveSanityProductId(item);
    const variantTitle = item.variantTitle ?? parseVariantTitle(item.title);

    return {
      _key: randomUUID(),
      _type: "item",
      product: productRef ? { _type: "reference", _ref: productRef } : undefined,
      productTitle: item.title.replace(/\s*\([^)]+\)\s*$/, "").trim() || item.title,
      variantTitle: variantTitle || undefined,
      quantity: item.quantity,
      unitPrice: priceToCzk(item.price),
      currency: "CZK",
    };
  });

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
  if (!params.to) return;

  try {
    const { subject, text } = buildOrderConfirmationEmail({
      orderNumber: params.orderNumber,
      paymentMethod: params.paymentMethod,
      totalCzk: params.totalCzk,
    });

    await sendMail({
      to: params.to,
      subject,
      text,
    });
  } catch (error) {
    console.error("Order confirmation email failed:", error);
  }
}
