import type { CheckoutPaymentMethod } from "@/lib/checkout/pricing";

export type OrderConfirmationEmailInput = {
  orderNumber: string;
  paymentMethod: CheckoutPaymentMethod | string;
  totalCzk: number;
  origin?: string;
};

export function formatPaymentMethodLabel(method: string): string {
  if (method === "stripe") return "Card";
  if (method === "delivery") return "Pay on delivery";
  return method;
}

export function buildOrderConfirmationEmail(input: OrderConfirmationEmailInput) {
  const trackPath = "/orders";
  const trackUrl = input.origin ? `${input.origin}${trackPath}` : trackPath;

  const subject = `Speed Coffee order confirmation (${input.orderNumber})`;
  const text = [
    "Thank you for your order!",
    "",
    `Order number: ${input.orderNumber}`,
    `Payment method: ${formatPaymentMethodLabel(input.paymentMethod)}`,
    `Total: ${input.totalCzk} CZK`,
    "",
    `You can track your order at: ${trackUrl}`,
  ].join("\n");

  return { subject, text, trackUrl };
}
