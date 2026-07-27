import { getSanityServerClient, getSanityServerWriteClient } from "@/lib/sanity/server-client";
import { urlFor } from "@/lib/sanity/image";

export type AdminEvent = {
  _id: string;
  title_en: string;
  title_cz: string;
  description_en?: string;
  description_cz?: string;
  startDate: string;
  endDate?: string;
  location_en?: string;
  location_cz?: string;
  imageUrl?: string;
  externalUrl?: string;
  linkLabel_en?: string;
  linkLabel_cz?: string;
  featured?: boolean;
  isPublished?: boolean;
  display_order?: number;
};

export type AdminProduct = {
  _id: string;
  title_en: string;
  title_cz: string;
  subtitle_en?: string;
  subtitle_cz?: string;
  description_en?: string;
  description_cz?: string;
  price: number;
  price_currency?: string;
  imageUrl?: string;
  display_order?: number;
};

export type AdminOrder = {
  _id: string;
  orderNumber: string;
  status: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  shippingAddress?: string;
  total?: number;
  currency?: string;
  _createdAt: string;
  items?: {
    productTitle?: string;
    variantTitle?: string;
    quantity: number;
    unitPrice?: number;
    currency?: string;
  }[];
};

function readClient() {
  return getSanityServerClient() ?? getSanityServerWriteClient();
}

export function writeClient() {
  return getSanityServerWriteClient();
}

export async function getAdminStats() {
  const client = readClient();
  if (!client) {
    return { events: 0, products: 0, orders: 0, pendingOrders: 0 };
  }

  const [events, products, orders, pendingOrders] = await Promise.all([
    client.fetch<number>(`count(*[_type == "event"])`),
    client.fetch<number>(`count(*[_type == "product"])`),
    client.fetch<number>(`count(*[_type == "order"])`),
    client.fetch<number>(`count(*[_type == "order" && status == "pending"])`),
  ]);

  return { events, products, orders, pendingOrders };
}

export async function listAdminEvents(): Promise<AdminEvent[]> {
  const client = readClient();
  if (!client) return [];

  const docs = await client.fetch<
    (Omit<AdminEvent, "imageUrl"> & { image?: { asset?: { _ref?: string } } })[]
  >(
    `*[_type == "event"] | order(startDate desc) {
      _id, title_en, title_cz, description_en, description_cz,
      startDate, endDate, location_en, location_cz, image,
      externalUrl, linkLabel_en, linkLabel_cz, featured, isPublished, display_order
    }`,
  );

  return docs.map((doc) => ({
    ...doc,
    imageUrl: doc.image ? urlFor(doc.image).width(400).height(500).fit("crop").url() : undefined,
  }));
}

export async function getAdminEvent(id: string): Promise<AdminEvent | null> {
  const client = readClient();
  if (!client) return null;

  const doc = await client.fetch<
    (Omit<AdminEvent, "imageUrl"> & { image?: { asset?: { _ref?: string } } }) | null
  >(
    `*[_type == "event" && _id == $id][0] {
      _id, title_en, title_cz, description_en, description_cz,
      startDate, endDate, location_en, location_cz, image,
      externalUrl, linkLabel_en, linkLabel_cz, featured, isPublished, display_order
    }`,
    { id },
  );

  if (!doc) return null;
  return {
    ...doc,
    imageUrl: doc.image ? urlFor(doc.image).width(800).url() : undefined,
  };
}

export async function listAdminProducts(): Promise<AdminProduct[]> {
  const client = readClient();
  if (!client) return [];

  const docs = await client.fetch<
    (Omit<AdminProduct, "imageUrl"> & { image?: { asset?: { _ref?: string } } })[]
  >(
    `*[_type == "product"] | order(display_order asc, title_en asc) {
      _id, title_en, title_cz, subtitle_en, subtitle_cz,
      description_en, description_cz, price, price_currency, image, display_order
    }`,
  );

  return docs.map((doc) => ({
    ...doc,
    imageUrl: doc.image ? urlFor(doc.image).width(200).height(200).fit("crop").url() : undefined,
  }));
}

export async function getAdminProduct(id: string): Promise<AdminProduct | null> {
  const client = readClient();
  if (!client) return null;

  const doc = await client.fetch<
    (Omit<AdminProduct, "imageUrl"> & { image?: { asset?: { _ref?: string } } }) | null
  >(
    `*[_type == "product" && _id == $id][0] {
      _id, title_en, title_cz, subtitle_en, subtitle_cz,
      description_en, description_cz, price, price_currency, image, display_order
    }`,
    { id },
  );

  if (!doc) return null;
  return {
    ...doc,
    imageUrl: doc.image ? urlFor(doc.image).width(400).url() : undefined,
  };
}

export async function listAdminOrders(): Promise<AdminOrder[]> {
  const client = readClient();
  if (!client) return [];

  return client.fetch<AdminOrder[]>(
    `*[_type == "order"] | order(_createdAt desc) {
      _id, orderNumber, status, customerName, customerEmail, customerPhone,
      shippingAddress, total, currency, _createdAt,
      items[]{ productTitle, variantTitle, quantity, unitPrice, currency }
    }`,
  );
}

export async function getAdminOrder(id: string): Promise<AdminOrder | null> {
  const client = readClient();
  if (!client) return null;

  return client.fetch<AdminOrder | null>(
    `*[_type == "order" && _id == $id][0] {
      _id, orderNumber, status, customerName, customerEmail, customerPhone,
      shippingAddress, total, currency, _createdAt,
      items[]{ productTitle, variantTitle, quantity, unitPrice, currency }
    }`,
    { id },
  );
}

export async function uploadSanityImage(file: File) {
  const client = writeClient();
  if (!client) throw new Error("Sanity write client not configured");

  const buffer = Buffer.from(await file.arrayBuffer());
  const asset = await client.assets.upload("image", buffer, {
    filename: file.name,
    contentType: file.type,
  });

  return {
    _type: "image" as const,
    asset: { _type: "reference" as const, _ref: asset._id },
  };
}
