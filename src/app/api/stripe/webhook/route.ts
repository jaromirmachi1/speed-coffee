import Stripe from "stripe";
import {
  createOrderRecord,
  orderExistsByPaymentId,
  sendOrderEmail,
  type CheckoutItem,
  type CheckoutCustomer,
} from "@/lib/orders/createOrder";
import { orderTotalCzk, priceToCzk } from "@/lib/checkout/pricing";

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

function parseItems(raw: string | undefined): CheckoutItem[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as CheckoutItem[]) : [];
  } catch {
    return [];
  }
}

type CheckoutSessionWithShipping = Stripe.Checkout.Session & {
  shipping_details?: {
    name?: string | null;
    address?: Stripe.Address | null;
  } | null;
};

function customerFromSession(session: CheckoutSessionWithShipping): CheckoutCustomer {
  const shippingAddress = session.shipping_details?.address;
  const billingAddress = session.customer_details?.address;
  const address = shippingAddress ?? billingAddress;

  return {
    name:
      session.shipping_details?.name ??
      session.customer_details?.name ??
      "",
    email: session.customer_details?.email ?? "",
    phone: session.customer_details?.phone ?? undefined,
    street: [address?.line1, address?.line2].filter(Boolean).join(", "),
    city: address?.city ?? "",
    postalCode: address?.postal_code ?? "",
    country: address?.country ?? "",
  };
}

async function fulfillStripeOrder(params: {
  paymentId: string;
  items: CheckoutItem[];
  customer: CheckoutCustomer;
}): Promise<void> {
  if (await orderExistsByPaymentId(params.paymentId)) return;

  const created = await createOrderRecord({
    items: params.items,
    customer: params.customer,
    paymentMethod: "stripe",
    stripePaymentId: params.paymentId,
    status: "paid",
  });

  if (!created) {
    throw new Error("Order creation failed");
  }

  const subtotalCzk = params.items.reduce(
    (sum, item) => sum + priceToCzk(item.price) * item.quantity,
    0,
  );
  const totalCzk = orderTotalCzk(subtotalCzk, "stripe");

  await sendOrderEmail({
    to: params.customer.email,
    orderNumber: created.orderNumber,
    paymentMethod: "stripe",
    totalCzk,
  });
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

  try {
    if (event.type === "checkout.session.completed") {
      const sessionEvent = event.data.object as Stripe.Checkout.Session;
      const session = (await stripe.checkout.sessions.retrieve(
        sessionEvent.id,
      )) as CheckoutSessionWithShipping;

      if (session.payment_status !== "paid") {
        return new Response("ok", { status: 200 });
      }

      const items = parseItems(session.metadata?.sc_items_json);
      const customer = customerFromSession(session);
      const paymentId = session.id;

      await fulfillStripeOrder({ paymentId, items, customer });
      return new Response("ok", { status: 200 });
    }

    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const paymentId = paymentIntent.id;
      const metadata = paymentIntent.metadata ?? {};
      const items = parseItems(metadata.sc_items_json);

      const customer: CheckoutCustomer = {
        name: metadata.sc_customer_name ?? "",
        email: metadata.sc_customer_email ?? "",
        phone: metadata.sc_customer_phone ?? undefined,
        street: metadata.sc_shipping_street ?? "",
        city: metadata.sc_shipping_city ?? "",
        postalCode: metadata.sc_shipping_postal_code ?? "",
        country: metadata.sc_shipping_country ?? "",
      };

      await fulfillStripeOrder({ paymentId, items, customer });
      return new Response("ok", { status: 200 });
    }
  } catch (error) {
    console.error("Stripe webhook handler failed:", error);
    return new Response("Webhook processing failed", { status: 500 });
  }

  return new Response("ok", { status: 200 });
}
