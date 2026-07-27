"use server";

import { isSanityConfigured } from "@/lib/sanity/client";
import { getEventsFromSanity } from "@/lib/sanity/events";
import type { EventDisplay } from "@/types/event";

export async function fetchEvents(
  language: "en" | "cz" = "cz",
): Promise<EventDisplay[]> {
  try {
    if (!isSanityConfigured()) {
      return [];
    }
    return await getEventsFromSanity(language);
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}
