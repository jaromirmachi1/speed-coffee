import { sanityClient, isSanityConfigured } from "./client";
import { urlFor } from "./image";
import type { Product, ProductDisplay } from "@/types/product";

const PRODUCTS_GROQ = `*[_type == "product" && is_active == true] | order(display_order asc) {
  _id,
  title_en,
  title_cz,
  subtitle_en,
  subtitle_cz,
  description_en,
  description_cz,
  price,
  price_currency,
  image,
  alt_text_en,
  alt_text_cz,
  is_active,
  display_order
}`;

type SanityProduct = {
  _id: string;
  title_en: string;
  title_cz: string;
  subtitle_en?: string;
  subtitle_cz?: string;
  description_en?: string;
  description_cz?: string;
  price: number;
  price_currency?: string;
  image?: { asset?: { _ref?: string }; _type?: string };
  alt_text_en?: string;
  alt_text_cz?: string;
  is_active: boolean;
  display_order?: number;
};

function sanityProductToProduct(doc: SanityProduct): Product {
  const imageUrl = doc.image
    ? urlFor(doc.image).width(800).height(800).fit("max").url()
    : "";

  return {
    id: doc._id,
    title_en: doc.title_en,
    title_cz: doc.title_cz,
    subtitle_en: doc.subtitle_en ?? "",
    subtitle_cz: doc.subtitle_cz ?? "",
    description_en: doc.description_en ?? "",
    description_cz: doc.description_cz ?? "",
    price: doc.price,
    price_currency: doc.price_currency ?? "EUR",
    image_url: imageUrl,
    alt_text_en: doc.alt_text_en ?? "",
    alt_text_cz: doc.alt_text_cz ?? "",
    is_active: doc.is_active,
    display_order: doc.display_order ?? 0,
    created_at: "",
    updated_at: "",
  };
}

function transformProductForDisplay(
  product: Product,
  language: "en" | "cz"
): ProductDisplay {
  const currencySymbol = product.price_currency === "EUR" ? "€" : product.price_currency;
  const price = `${currencySymbol}${product.price.toFixed(2)}`;

  if (language === "cz" && product.price_currency === "EUR") {
    const czkPrice = Math.round(product.price * 27);
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

/**
 * Fetch all active products from Sanity and return as ProductDisplay for the given language.
 */
export async function getProductsFromSanity(
  language: "en" | "cz" = "en"
): Promise<ProductDisplay[]> {
  if (!isSanityConfigured()) {
    return [];
  }
  try {
    const docs = await sanityClient.fetch<SanityProduct[]>(PRODUCTS_GROQ);
    const products: Product[] = docs.map(sanityProductToProduct);
    return products.map((p) => transformProductForDisplay(p, language));
  } catch (error) {
    console.error("Error fetching products from Sanity:", error);
    return [];
  }
}

const PRODUCT_BY_ID_GROQ = `*[_type == "product" && _id == $id && is_active == true][0] {
  _id,
  title_en,
  title_cz,
  subtitle_en,
  subtitle_cz,
  description_en,
  description_cz,
  price,
  price_currency,
  image,
  alt_text_en,
  alt_text_cz,
  is_active,
  display_order
}`;

/**
 * Fetch a single product by ID from Sanity.
 */
export async function getProductByIdFromSanity(
  id: string,
  language: "en" | "cz" = "en"
): Promise<ProductDisplay | null> {
  if (!isSanityConfigured()) {
    return null;
  }
  try {
    const doc = await sanityClient.fetch<SanityProduct | null>(PRODUCT_BY_ID_GROQ, { id });
    if (!doc) return null;
    const product = sanityProductToProduct(doc);
    return transformProductForDisplay(product, language);
  } catch (error) {
    console.error("Error fetching product from Sanity:", error);
    return null;
  }
}
