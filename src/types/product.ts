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
}

export interface ProductDisplay {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}
