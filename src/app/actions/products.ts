"use server";

import { isSanityConfigured } from "@/lib/sanity/client";
import { getProductsFromSanity, getProductByIdFromSanity } from "@/lib/sanity/products";
import { getProducts, getProductById, transformProductForDisplay } from "@/lib/supabase/products";
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

/**
 * Fetch a single product by ID for the product detail page.
 */
export async function fetchProduct(
  id: string,
  language: "en" | "cz" = "en"
): Promise<ProductDisplay | null> {
  try {
    if (isSanityConfigured()) {
      return await getProductByIdFromSanity(id, language);
    }
    const product = await getProductById(id);
    if (!product) return null;
    return transformProductForDisplay(product, language);
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
