export const SHIPPING_CZK = 89;
export const POD_FEE_CZK = 20;

export type CheckoutPaymentMethod = "stripe" | "delivery";

export function priceToCzk(priceStr: string): number {
  const num = parseFloat(priceStr.replace(/[^\d.,]/g, "").replace(",", ".")) || 0;
  return priceStr.includes("€") ? Math.round(num * 27) : num;
}

export function formatCzk(value: number): string {
  return `${value} Kč`;
}

export function czkToStripeAmount(czk: number): number {
  return Math.round(czk * 100);
}

export function podFeeFor(paymentMethod: CheckoutPaymentMethod): number {
  return paymentMethod === "delivery" ? POD_FEE_CZK : 0;
}

export function orderTotalCzk(
  subtotalCzk: number,
  paymentMethod: CheckoutPaymentMethod
): number {
  return subtotalCzk + SHIPPING_CZK + podFeeFor(paymentMethod);
}
