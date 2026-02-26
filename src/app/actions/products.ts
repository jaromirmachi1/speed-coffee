"use server";

import { isSanityConfigured } from "@/lib/sanity/client";
import { getProductsFromSanity } from "@/lib/sanity/products";
import { getProducts, transformProductForDisplay } from "@/lib/supabase/products";
import type { ProductDisplay } from "@/types/product";

/**
 * Server action to fetch products for display.
 * Uses Sanity CMS when NEXT_PUBLIC_SANITY_PROJECT_ID is set, otherwise Supabase.
 */
export async function fetchProducts(language: "en" | "cz" = "en"): Promise<ProductDisplay[]> {
  try {
    if (isSanityConfigured()) {
      return await getProductsFromSanity(language);
    }
    const products = await getProducts();
    return products.map((product) => transformProductForDisplay(product, language));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
