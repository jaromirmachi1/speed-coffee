import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Rezervace coffee vanu",
  description:
    "Rezervujte Speed Coffee na festival, firemní akci nebo svatbu. Mobilní coffee van s kvalitní kávou a matcha.",
  path: "/form",
});

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
