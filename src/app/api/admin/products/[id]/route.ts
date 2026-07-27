import { NextRequest, NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/require-admin";
import { writeClient } from "@/lib/admin/sanity-admin";

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: NextRequest, context: RouteContext) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const client = writeClient();
  if (!client) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 503 });
  }

  const { id } = await context.params;
  const body = await request.json();

  try {
    await client
      .patch(id)
      .set({
        title_en: body.title_en,
        title_cz: body.title_cz,
        subtitle_en: body.subtitle_en || "",
        subtitle_cz: body.subtitle_cz || "",
        description_en: body.description_en || "",
        description_cz: body.description_cz || "",
        price: Number(body.price) || 0,
        price_currency: body.price_currency || "CZK",
        display_order: Number(body.display_order) || 0,
        ...(body.image ? { image: body.image } : {}),
      })
      .commit();

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update product" },
      { status: 500 },
    );
  }
}

export async function DELETE(_request: NextRequest, context: RouteContext) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const client = writeClient();
  if (!client) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 503 });
  }

  const { id } = await context.params;

  try {
    await client.delete(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete product" },
      { status: 500 },
    );
  }
}
