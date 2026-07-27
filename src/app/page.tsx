import HomePageClient from "./HomePageClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/seo/json-ld";
import { SITE_DESCRIPTION_CS } from "@/lib/seo/site";

export const metadata = createPageMetadata({
  title: "Specialty káva, matcha a coffee van Brno",
  description: SITE_DESCRIPTION_CS,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          buildWebSiteSchema(),
          buildOrganizationSchema(),
          buildLocalBusinessSchema(),
        ]}
      />
      <HomePageClient />
    </>
  );
}
