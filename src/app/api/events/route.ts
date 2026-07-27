import { NextRequest, NextResponse } from "next/server";
import { fetchEvents } from "@/app/actions/events";

export async function GET(request: NextRequest) {
  try {
    const lang = request.nextUrl.searchParams.get("lang");
    const language = lang === "en" ? "en" : "cz";
    const events = await fetchEvents(language);
    return NextResponse.json({ ok: true, events });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Failed to load events",
        events: [],
      },
      { status: 500 },
    );
  }
}
