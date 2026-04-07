import { NextResponse } from "next/server";
import { lookupOrderForTracking } from "@/lib/sanity/orders";
import { isSanityConfigured } from "@/lib/sanity/client";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: Request) {
  if (!isSanityConfigured()) {
    return NextResponse.json(
      { ok: false, error: "unavailable" },
      { status: 503 }
    );
  }

  try {
    const body = (await request.json()) as {
      orderNumber?: string;
      email?: string;
    };

    const orderNumber = typeof body.orderNumber === "string" ? body.orderNumber : "";
    const email = typeof body.email === "string" ? body.email : "";

    if (!orderNumber.trim() || !email.trim() || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
    }

    const order = await lookupOrderForTracking(orderNumber, email);

    if (!order) {
      return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, order });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
