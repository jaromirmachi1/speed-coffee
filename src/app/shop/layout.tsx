import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Obchod",
  description:
    "Speed Coffee e-shop — specialty káva, matcha a produkty přímo od naší pražírny a kavárny v Brně.",
  path: "/shop",
});

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
