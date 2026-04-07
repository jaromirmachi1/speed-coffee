import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export async function POST(request: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: "Stripe is not configured." }, { status: 500 });
  }

  try {
    const body = (await request.json()) as {
      paymentIntentId?: string;
      customer?: {
        name?: string;
        email?: string;
        phone?: string;
        street?: string;
        city?: string;
        postalCode?: string;
        country?: string;
      };
      items?: Array<{ id: string; title: string; price: string; quantity: number }>;
    };

    if (!body.paymentIntentId || !body.customer || !body.items?.length) {
      return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
    }

    const itemsJson = JSON.stringify(
      body.items.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      }))
    );

    await stripe.paymentIntents.update(body.paymentIntentId, {
      metadata: {
        sc_customer_name: body.customer.name ?? "",
        sc_customer_email: body.customer.email ?? "",
        sc_customer_phone: body.customer.phone ?? "",
        sc_shipping_street: body.customer.street ?? "",
        sc_shipping_city: body.customer.city ?? "",
        sc_shipping_postal_code: body.customer.postalCode ?? "",
        sc_shipping_country: body.customer.country ?? "",
        sc_items_json: itemsJson,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to attach payment metadata.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
