import Stripe from "stripe";
import {
  createOrderRecord,
  orderExistsByPaymentId,
  sendOrderEmail,
  type CheckoutItem,
} from "@/lib/orders/createOrder";
import { orderTotalCzk, priceToCzk } from "@/lib/checkout/pricing";

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export async function POST(request: Request) {
  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !webhookSecret) {
    return new Response("Stripe webhook is not configured.", { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) return new Response("Missing signature.", { status: 400 });

  const payload = await request.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature.";
    return new Response(message, { status: 400 });
  }

  if (event.type !== "payment_intent.succeeded") {
    return new Response("ok", { status: 200 });
  }

  const paymentIntent = event.data.object as Stripe.PaymentIntent;
  const paymentId = paymentIntent.id;

  if (await orderExistsByPaymentId(paymentId)) {
    return new Response("ok", { status: 200 });
  }

  try {
    const metadata = paymentIntent.metadata ?? {};
    const rawItems = metadata.sc_items_json ? JSON.parse(metadata.sc_items_json) : [];
    const items: CheckoutItem[] = Array.isArray(rawItems) ? rawItems : [];

    const customer = {
      name: metadata.sc_customer_name ?? "",
      email: metadata.sc_customer_email ?? "",
      phone: metadata.sc_customer_phone ?? "",
      street: metadata.sc_shipping_street ?? "",
      city: metadata.sc_shipping_city ?? "",
      postalCode: metadata.sc_shipping_postal_code ?? "",
      country: metadata.sc_shipping_country ?? "",
    };

    const created = await createOrderRecord({
      items,
      customer,
      paymentMethod: "stripe",
      stripePaymentId: paymentId,
      status: "paid",
    });

    if (!created) return new Response("Order creation failed", { status: 500 });

    const subtotalCzk = items.reduce((sum, item) => sum + priceToCzk(item.price) * item.quantity, 0);
    const totalCzk = orderTotalCzk(subtotalCzk, "stripe");
    await sendOrderEmail({
      to: customer.email,
      orderNumber: created.orderNumber,
      paymentMethod: "stripe",
      totalCzk,
    });
  } catch (error) {
    console.error("Stripe webhook handler failed:", error);
    return new Response("Webhook processing failed", { status: 500 });
  }

  return new Response("ok", { status: 200 });
}
