import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductByIdFromSanity } from "@/lib/sanity/products";
import { createPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildProductSchema,
} from "@/lib/seo/json-ld";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductByIdFromSanity(id, "cz");

  if (!product) {
    return createPageMetadata({
      title: "Produkt nenalezen",
      description: "Požadovaný produkt nebyl nalezen.",
      path: `/shop/${id}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: product.title,
    description:
      product.description ||
      `${product.title} — Speed Coffee specialty produkt dostupný v e-shopu.`,
    path: `/shop/${id}`,
    image: product.image || undefined,
  });
}

export default async function ProductLayout({
  children,
  params,
}: LayoutProps) {
  const { id } = await params;
  const product = await getProductByIdFromSanity(id, "cz");

  if (!product) {
    notFound();
  }

  const parsedPrice = Number.parseFloat(
    product.price.replace(/[^\d.,]/g, "").replace(",", "."),
  );
  const price =
    product.variants?.[0]?.raw_price ??
    (Number.isFinite(parsedPrice) ? parsedPrice : 0);
  const currency = product.variants?.[0]?.currency ?? "CZK";

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Domů", path: "/" },
            { name: "Obchod", path: "/shop" },
            { name: product.title, path: `/shop/${id}` },
          ]),
          buildProductSchema({
            id,
            name: product.title,
            description: product.description,
            image: product.image,
            price,
            currency,
          }),
        ]}
      />
      {children}
    </>
  );
}
