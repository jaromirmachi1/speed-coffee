import { getSanityServerClient } from "./server-client";

const ORDER_BY_NUMBER_GROQ = `*[_type == "order" && orderNumber == $orderNumber][0]{
  orderNumber,
  status,
  customerName,
  customerEmail,
  shippingAddress,
  total,
  currency,
  stripeSessionId,
  _createdAt,
  items[]{
    quantity,
    unitPrice,
    currency,
    "title_en": product->title_en,
    "title_cz": product->title_cz
  }
}`;

type SanityOrderDoc = {
  orderNumber: string;
  status: string;
  customerName?: string;
  customerEmail?: string;
  shippingAddress?: string;
  total?: number;
  currency?: string;
  stripeSessionId?: string;
  _createdAt: string;
  items?: {
    quantity: number;
    unitPrice?: number;
    currency?: string;
    title_en?: string;
    title_cz?: string;
  }[];
};

function normalizeEmail(s: string): string {
  return s.trim().toLowerCase();
}

export type OrderTrackingLine = {
  quantity: number;
  unitPrice: number | null;
  currency: string;
  title_en: string;
  title_cz: string;
};

export type OrderTrackingPayload = {
  orderNumber: string;
  status: string;
  customerName: string;
  shippingAddress: string;
  total: number | null;
  currency: string;
  createdAt: string;
  items: OrderTrackingLine[];
};

/**
 * Find an order by number and verify the email matches (case-insensitive).
 * Returns null if not found or email does not match (same response avoids leaking existence).
 */
export async function lookupOrderForTracking(
  orderNumber: string,
  customerEmail: string
): Promise<OrderTrackingPayload | null> {
  const client = getSanityServerClient();
  if (!client) return null;

  const trimmedNumber = orderNumber.trim();
  if (!trimmedNumber || !customerEmail.trim()) return null;

  try {
    const doc = await client.fetch<SanityOrderDoc | null>(ORDER_BY_NUMBER_GROQ, {
      orderNumber: trimmedNumber,
    });

    if (!doc) return null;

    const docEmail = doc.customerEmail ? normalizeEmail(doc.customerEmail) : "";
    if (!docEmail || docEmail !== normalizeEmail(customerEmail)) {
      return null;
    }

    return {
      orderNumber: doc.orderNumber,
      status: doc.status ?? "pending",
      customerName: doc.customerName ?? "",
      shippingAddress: doc.shippingAddress ?? "",
      total: typeof doc.total === "number" ? doc.total : null,
      currency: doc.currency ?? "EUR",
      createdAt: doc._createdAt,
      items:
        doc.items?.map((row) => ({
          quantity: row.quantity,
          unitPrice: typeof row.unitPrice === "number" ? row.unitPrice : null,
          currency: row.currency ?? doc.currency ?? "EUR",
          title_en: row.title_en ?? "Product",
          title_cz: row.title_cz ?? "Produkt",
        })) ?? [],
    };
  } catch (e) {
    console.error("Sanity order lookup failed:", e);
    return null;
  }
}
