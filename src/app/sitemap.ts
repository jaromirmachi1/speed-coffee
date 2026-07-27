import type { MetadataRoute } from "next";
import { getSanityServerClient } from "@/lib/sanity/server-client";
import { absoluteUrl } from "@/lib/seo/metadata";
import { INDEXABLE_ROUTES } from "@/lib/seo/site";

type SitemapProduct = {
  _id: string;
  _updatedAt?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = INDEXABLE_ROUTES.map((path) => ({
    url: absoluteUrl(path === "/" ? "" : path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/shop" ? 0.9 : 0.7,
  }));

  let productRoutes: MetadataRoute.Sitemap = [];

  try {
    const client = getSanityServerClient();
    if (client) {
      const products = await client.fetch<SitemapProduct[]>(
        `*[_type == "product"]{ _id, _updatedAt }`,
      );

      productRoutes = products.map((product) => ({
        url: absoluteUrl(`/shop/${product._id}`),
        lastModified: product._updatedAt
          ? new Date(product._updatedAt)
          : new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.error("Sitemap product fetch failed:", error);
  }

  return [...staticRoutes, ...productRoutes];
}
