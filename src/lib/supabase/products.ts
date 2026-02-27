import { supabase } from "./client";
import type { Product, ProductDisplay } from "@/types/product";

/**
 * Fetch all active products from Supabase
 */
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching products:", error);
    throw error;
  }

  return data || [];
}

/**
 * Fetch a single product by ID from Supabase
 */
export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .eq("is_active", true)
    .single();

  if (error || !data) {
    if (error) console.error("Error fetching product:", error);
    return null;
  }
  return data;
}

/**
 * Transform product data for display based on language
 */
export function transformProductForDisplay(
  product: Product,
  language: "en" | "cz"
): ProductDisplay {
  const currencySymbol = product.price_currency === "EUR" ? "€" : product.price_currency;
  const price = `${currencySymbol}${product.price.toFixed(2)}`;
  
  // For CZ, convert EUR to CZK (approximate conversion, you may want to use a real API)
  if (language === "cz" && product.price_currency === "EUR") {
    const czkPrice = Math.round(product.price * 27); // Approximate 1 EUR = 27 CZK
    return {
      id: product.id,
      title: product.title_cz,
      subtitle: product.subtitle_cz,
      description: product.description_cz,
      price: `${czkPrice} Kč`,
      image: product.image_url,
      alt: product.alt_text_cz,
    };
  }

  return {
    id: product.id,
    title: product.title_en,
    subtitle: product.subtitle_en,
    description: product.description_en,
    price,
    image: product.image_url,
    alt: product.alt_text_en,
  };
}
