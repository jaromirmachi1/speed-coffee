import { NextRequest, NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/require-admin";
import { writeClient } from "@/lib/admin/sanity-admin";

function toIso(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

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
        description_en: body.description_en || "",
        description_cz: body.description_cz || "",
        startDate: toIso(body.startDate),
        endDate: toIso(body.endDate) || null,
        location_en: body.location_en || "",
        location_cz: body.location_cz || "",
        externalUrl: body.externalUrl || "",
        linkLabel_en: body.linkLabel_en || "Learn more",
        linkLabel_cz: body.linkLabel_cz || "Více informací",
        featured: Boolean(body.featured),
        isPublished: body.isPublished !== false,
        display_order: Number(body.display_order) || 0,
        ...(body.image ? { image: body.image } : {}),
      })
      .commit();

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update event" },
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
      { error: error instanceof Error ? error.message : "Failed to delete event" },
      { status: 500 },
    );
  }
}
