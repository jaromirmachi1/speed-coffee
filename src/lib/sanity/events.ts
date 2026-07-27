import { sanityClient, isSanityConfigured } from "./client";
import { urlFor } from "./image";
import type { EventDisplay } from "@/types/event";

const EVENTS_GROQ = `*[_type == "event" && isPublished == true] | order(startDate desc, display_order asc) {
  _id,
  title_en,
  title_cz,
  description_en,
  description_cz,
  startDate,
  endDate,
  location_en,
  location_cz,
  image,
  alt_text_en,
  alt_text_cz,
  externalUrl,
  linkLabel_en,
  linkLabel_cz,
  featured,
  display_order
}`;

type SanityEvent = {
  _id: string;
  title_en: string;
  title_cz: string;
  description_en?: string;
  description_cz?: string;
  startDate: string;
  endDate?: string;
  location_en?: string;
  location_cz?: string;
  image?: { asset?: { _ref?: string }; _type?: string };
  alt_text_en?: string;
  alt_text_cz?: string;
  externalUrl?: string;
  linkLabel_en?: string;
  linkLabel_cz?: string;
  featured?: boolean;
  display_order?: number;
};

function formatEventDate(
  startDate: string,
  endDate: string | undefined,
  language: "en" | "cz",
): string {
  const locale = language === "cz" ? "cs-CZ" : "en-GB";
  const start = new Date(startDate);
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const startDateStr = start.toLocaleDateString(locale, dateOptions);
  const startTimeStr = start.toLocaleTimeString(locale, timeOptions);

  if (!endDate) {
    return `${startDateStr} · ${startTimeStr}`;
  }

  const end = new Date(endDate);
  const endDateStr = end.toLocaleDateString(locale, dateOptions);
  const endTimeStr = end.toLocaleTimeString(locale, timeOptions);

  if (startDateStr === endDateStr) {
    return `${startDateStr} · ${startTimeStr} – ${endTimeStr}`;
  }

  return `${startDateStr} – ${endDateStr}`;
}

function sanityEventToDisplay(
  doc: SanityEvent,
  language: "en" | "cz",
): EventDisplay {
  const imageUrl = doc.image
    ? urlFor(doc.image).width(1200).height(1500).fit("crop").url()
    : "";

  const start = new Date(doc.startDate);
  const now = new Date();
  const eventEnd = doc.endDate ? new Date(doc.endDate) : start;
  const isPast = eventEnd < now;

  return {
    id: doc._id,
    title: language === "cz" ? doc.title_cz : doc.title_en,
    description:
      language === "cz"
        ? doc.description_cz ?? ""
        : doc.description_en ?? "",
    startDate: doc.startDate,
    endDate: doc.endDate,
    dateLabel: formatEventDate(doc.startDate, doc.endDate, language),
    location:
      language === "cz"
        ? doc.location_cz ?? doc.location_en ?? ""
        : doc.location_en ?? doc.location_cz ?? "",
    image: imageUrl,
    alt:
      language === "cz"
        ? doc.alt_text_cz ?? doc.title_cz
        : doc.alt_text_en ?? doc.title_en,
    externalUrl: doc.externalUrl,
    linkLabel:
      language === "cz"
        ? doc.linkLabel_cz ?? "Více informací"
        : doc.linkLabel_en ?? "Learn more",
    featured: Boolean(doc.featured),
    isPast,
  };
}

export async function getEventsFromSanity(
  language: "en" | "cz" = "cz",
): Promise<EventDisplay[]> {
  if (!isSanityConfigured()) {
    return [];
  }

  try {
    const docs = await sanityClient.fetch<SanityEvent[]>(EVENTS_GROQ);
    return docs.map((doc) => sanityEventToDisplay(doc, language));
  } catch (error) {
    console.error("Error fetching events from Sanity:", error);
    return [];
  }
}
