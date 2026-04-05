import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const SHIPPING_CZK = 89;

/** Parse display price string to CZK number (e.g. "120 Kč" -> 120, "€4.50" -> ~122). */
function priceToCzk(priceStr: string): number {
  const num = parseFloat(priceStr.replace(/[^\d.,]/g, "").replace(",", ".")) || 0;
  return priceStr.includes("€") ? Math.round(num * 27) : num;
}

/** CZK to Stripe amount (smallest unit: 1 CZK = 100). */
function czkToStripeAmount(czk: number): number {
  return Math.round(czk * 100);
}

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export async function POST(request: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured. Set STRIPE_SECRET_KEY." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { items, successUrl, cancelUrl } = body as {
      items: Array<{ id: string; title: string; price: string; quantity: number; image?: string }>;
      successUrl?: string;
      cancelUrl?: string;
    };

    if (!items?.length) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") || request.nextUrl.origin;
    const success = successUrl || `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancel = cancelUrl || `${origin}/checkout/shipping`;

    const line_items = items.map((item) => {
      const unitAmountCzk = priceToCzk(item.price);
      return {
        price_data: {
          currency: "czk",
          product_data: {
            name: item.title,
            images: item.image ? [item.image] : undefined,
          },
          unit_amount: czkToStripeAmount(unitAmountCzk),
        },
        quantity: Math.min(99, Math.max(1, item.quantity)),
      };
    });

    line_items.push({
      price_data: {
        currency: "czk",
        product_data: {
          name: "Shipping (standard delivery)",
          images: undefined,
        },
        unit_amount: czkToStripeAmount(SHIPPING_CZK),
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: success,
      cancel_url: cancel,
      shipping_address_collection: {
        allowed_countries: ["CZ", "SK", "AT", "DE", "PL"],
      },
      locale: "cs",
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    const message = err instanceof Error ? err.message : "Failed to create checkout session";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
