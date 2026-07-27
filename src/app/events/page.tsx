import EventsPageClient from "./EventsPageClient";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Akce a události",
  description:
    "Kde nás najdete — festivaly, trhy, pop-up akce a speciální události Speed Coffee v Brně a okolí.",
  path: "/events",
});

export default function EventsPage() {
  return <EventsPageClient />;
}
