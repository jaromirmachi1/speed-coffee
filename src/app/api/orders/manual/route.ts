import { NextRequest, NextResponse } from "next/server";
import { createOrderRecord, sendOrderEmail } from "@/lib/orders/createOrder";
import { orderTotalCzk, priceToCzk } from "@/lib/checkout/pricing";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      paymentMethod: "delivery";
      items: Array<{ id: string; title: string; price: string; quantity: number }>;
      customer: {
        name: string;
        email: string;
        phone?: string;
        street: string;
        city: string;
        postalCode: string;
        country: string;
      };
    };

    if (!body.items?.length || !body.customer?.name || !body.customer?.email || !body.paymentMethod) {
      return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
    }

    const created = await createOrderRecord({
      items: body.items,
      customer: body.customer,
      paymentMethod: body.paymentMethod,
      status: "pending",
    });

    if (!created) {
      return NextResponse.json({ error: "Order creation failed." }, { status: 500 });
    }

    const totalCzk =
      orderTotalCzk(
        body.items.reduce((sum, item) => sum + priceToCzk(item.price) * item.quantity, 0),
        body.paymentMethod
      );

    await sendOrderEmail({
      to: body.customer.email,
      orderNumber: created.orderNumber,
      paymentMethod: body.paymentMethod,
      totalCzk,
    });

    return NextResponse.json({ ok: true, orderNumber: created.orderNumber });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Manual order endpoint failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
