import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const SHIPPING_CZK = 89;

/** Parse display price string to CZK number. */
function priceToCzk(priceStr: string): number {
  const num = parseFloat(priceStr.replace(/[^\d.,]/g, "").replace(",", ".")) || 0;
  return priceStr.includes("€") ? Math.round(num * 27) : num;
}

/** CZK to Stripe amount (smallest unit: 1 CZK = 100). */
function czkToStripeAmount(czk: number): number {
  return Math.round(czk * 100);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe is not configured. Set STRIPE_SECRET_KEY." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { items } = body as {
      items: Array<{ id: string; title: string; price: string; quantity: number }>;
    };

    if (!items?.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const subtotalCzk = items.reduce(
      (sum, item) => sum + priceToCzk(item.price) * Math.min(99, Math.max(1, item.quantity)),
      0
    );
    const totalCzk = subtotalCzk + SHIPPING_CZK;
    const amount = czkToStripeAmount(totalCzk);

    if (amount < 100) {
      return NextResponse.json(
        { error: "Order total must be at least 1 CZK" },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "czk",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error("Create payment intent error:", err);
    const message = err instanceof Error ? err.message : "Failed to create payment intent";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
