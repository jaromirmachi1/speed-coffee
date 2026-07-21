import { NextRequest, NextResponse } from "next/server";
import { lookupOrderNumberByPaymentId } from "@/lib/sanity/orders";
import { isSanityConfigured } from "@/lib/sanity/client";

export async function GET(request: NextRequest) {
  if (!isSanityConfigured()) {
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  const paymentId = request.nextUrl.searchParams.get("payment_intent")?.trim();
  if (!paymentId || !paymentId.startsWith("pi_")) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }

  const orderNumber = await lookupOrderNumberByPaymentId(paymentId);
  if (!orderNumber) {
    return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  }

  return NextResponse.json({ ok: true, orderNumber });
}
