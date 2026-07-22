import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import {
  SHIPPING_CZK,
  priceToCzk,
  czkToStripeAmount,
} from "@/lib/checkout/pricing";

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
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    const { items, successUrl, cancelUrl, locale } = body as {
      items: Array<{
        id: string;
        product_id?: string;
        title: string;
        price: string;
        quantity: number;
        image?: string;
        selected_variant_title?: string;
      }>;
      successUrl?: string;
      cancelUrl?: string;
      locale?: "cs" | "en";
    };

    if (!items?.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const origin = request.headers.get("origin") || request.nextUrl.origin;
    const success =
      successUrl ||
      `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancel = cancelUrl || `${origin}/checkout`;

    const orderItems = items.map((item) => {
      const productId = item.product_id ?? item.id.split("::")[0];
      const title = item.selected_variant_title
        ? `${item.title} (${item.selected_variant_title})`
        : item.title;

      return {
        id: productId,
        product_id: productId,
        title,
        variantTitle: item.selected_variant_title,
        price: item.price,
        quantity: Math.min(99, Math.max(1, item.quantity)),
      };
    });

    const line_items = items.map((item) => ({
      price_data: {
        currency: "czk",
        product_data: {
          name: item.selected_variant_title
            ? `${item.title} (${item.selected_variant_title})`
            : item.title,
          images: item.image ? [item.image] : undefined,
        },
        unit_amount: czkToStripeAmount(priceToCzk(item.price)),
      },
      quantity: Math.min(99, Math.max(1, item.quantity)),
    }));

    line_items.push({
      price_data: {
        currency: "czk",
        product_data: {
          name: locale === "en" ? "Shipping (standard delivery)" : "Doprava (standardní doručení)",
          images: undefined,
        },
        unit_amount: czkToStripeAmount(SHIPPING_CZK),
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items,
      success_url: success,
      cancel_url: cancel,
      locale: locale === "en" ? "en" : "cs",
      shipping_address_collection: {
        allowed_countries: ["CZ", "SK", "AT", "DE", "PL"],
      },
      phone_number_collection: { enabled: true },
      metadata: {
        sc_items_json: JSON.stringify(orderItems),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    const message =
      err instanceof Error ? err.message : "Failed to create checkout session";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
