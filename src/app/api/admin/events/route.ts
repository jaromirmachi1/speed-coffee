import { NextRequest, NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/require-admin";
import { writeClient } from "@/lib/admin/sanity-admin";

function toIso(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

export async function GET() {
  const denied = await requireAdminApi();
  if (denied) return denied;

  const client = writeClient();
  if (!client) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 503 });
  }

  const events = await client.fetch(`*[_type == "event"] | order(startDate desc)`);
  return NextResponse.json({ ok: true, events });
}

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
      _type: "event",
      title_en: body.title_en,
      title_cz: body.title_cz,
      description_en: body.description_en || "",
      description_cz: body.description_cz || "",
      startDate: toIso(body.startDate),
      endDate: toIso(body.endDate),
      location_en: body.location_en || "",
      location_cz: body.location_cz || "",
      externalUrl: body.externalUrl || "",
      linkLabel_en: body.linkLabel_en || "Learn more",
      linkLabel_cz: body.linkLabel_cz || "Více informací",
      featured: Boolean(body.featured),
      isPublished: body.isPublished !== false,
      display_order: Number(body.display_order) || 0,
      image: body.image || undefined,
    });

    return NextResponse.json({ ok: true, id: doc._id });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create event" },
      { status: 500 },
    );
  }
}
