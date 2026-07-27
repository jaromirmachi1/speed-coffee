import type { Metadata } from "next";
import EventsPageClient from "./EventsPageClient";

export const metadata: Metadata = {
  title: "Akce | Speed Coffee",
  description:
    "Kde nás najdete — festivaly, trhy, pop-up akce a speciální události Speed Coffee.",
};

export default function EventsPage() {
  return <EventsPageClient />;
}
