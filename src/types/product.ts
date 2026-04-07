export interface Product {
  id: string;
  title_en: string;
  title_cz: string;
  subtitle_en: string;
  subtitle_cz: string;
  description_en: string;
  description_cz: string;
  price: number;
  price_currency: string;
  image_url: string;
  alt_text_en: string;
  alt_text_cz: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
  // Optional fields used when product comes from Sanity
  advantages?: {
    title_en: string;
    title_cz: string;
    description_en: string;
    description_cz: string;
    icon_key?: string;
  }[];
  variants?: {
    key: string;
    title_en: string;
    title_cz: string;
    price: number;
    currency?: string;
  }[];
  gallery_urls?: string[];
}

export interface ProductDisplay {
  id: string;
  product_id?: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  advantages?: {
    title: string;
    text: string;
    icon_key?: string;
  }[];
  variants?: {
    key: string;
    title: string;
    price: string;
    raw_price: number;
    currency: string;
  }[];
  selected_variant_key?: string;
  selected_variant_title?: string;
  gallery?: string[];
}
