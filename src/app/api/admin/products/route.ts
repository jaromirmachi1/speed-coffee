import { NextRequest, NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/require-admin";
import { writeClient } from "@/lib/admin/sanity-admin";

export async function POST(request: NextRequest) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const client = writeClient();
  if (!client) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 503 });
  }

  const body = await request.json();

  try {
    const doc = await client.create({
      _type: "product",
      title_en: body.title_en,
      title_cz: body.title_cz,
      subtitle_en: body.subtitle_en || "",
      subtitle_cz: body.subtitle_cz || "",
      description_en: body.description_en || "",
      description_cz: body.description_cz || "",
      price: Number(body.price) || 0,
      price_currency: body.price_currency || "CZK",
      display_order: Number(body.display_order) || 0,
      image: body.image || undefined,
    });

    return NextResponse.json({ ok: true, id: doc._id });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create product" },
      { status: 500 },
    );
  }
}
