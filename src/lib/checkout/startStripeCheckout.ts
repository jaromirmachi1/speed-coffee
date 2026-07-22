import type { CartItem } from "@/types/cart";

type StartStripeCheckoutParams = {
  items: CartItem[];
  locale?: "cs" | "en";
};

export async function startStripeCheckout({
  items,
  locale = "cs",
}: StartStripeCheckoutParams): Promise<string> {
  const res = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      locale,
      items: items.map((item) => ({
        id: item.id,
        product_id: item.product_id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
        selected_variant_title: item.selected_variant_title,
      })),
    }),
  });

  const data = await res.json();
  if (!res.ok || !data.url) {
    throw new Error(data?.error || "Failed to start checkout");
  }

  return data.url as string;
}
