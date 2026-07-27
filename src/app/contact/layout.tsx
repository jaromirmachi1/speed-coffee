import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Kontaktujte Speed Coffee — akce, velkoobchod, spolupráce a podpora. E-mail, telefon a adresa v Brně.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
