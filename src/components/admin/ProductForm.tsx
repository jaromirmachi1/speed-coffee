"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/admin/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/admin/ui/card";
import { Input } from "@/components/admin/ui/input";
import { Label } from "@/components/admin/ui/label";
import { Textarea } from "@/components/admin/ui/textarea";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import type { AdminProduct } from "@/lib/admin/sanity-admin";

type SanityImageRef = {
  _type: "image";
  asset: { _type: "reference"; _ref: string };
};

type ProductFormProps = {
  product?: AdminProduct;
};

export function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<SanityImageRef | null>(null);

  const [form, setForm] = useState({
    title_en: product?.title_en ?? "",
    title_cz: product?.title_cz ?? "",
    subtitle_en: product?.subtitle_en ?? "",
    subtitle_cz: product?.subtitle_cz ?? "",
    description_en: product?.description_en ?? "",
    description_cz: product?.description_cz ?? "",
    price: product?.price ?? 0,
    price_currency: product?.price_currency ?? "CZK",
    display_order: product?.display_order ?? 0,
  });

  const update = (key: keyof typeof form, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const payload = { ...form, ...(image ? { image } : {}) };
    const url = product ? `/api/admin/products/${product._id}` : "/api/admin/products";
    const method = product ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      router.push("/admin/products");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!product || !confirm("Delete this product?")) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/products/${product._id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");
      router.push("/admin/products");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Product details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="title_en">Title (EN)</Label>
            <Input id="title_en" value={form.title_en} onChange={(e) => update("title_en", e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title_cz">Title (CZ)</Label>
            <Input id="title_cz" value={form.title_cz} onChange={(e) => update("title_cz", e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subtitle_en">Subtitle (EN)</Label>
            <Input id="subtitle_en" value={form.subtitle_en} onChange={(e) => update("subtitle_en", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subtitle_cz">Subtitle (CZ)</Label>
            <Input id="subtitle_cz" value={form.subtitle_cz} onChange={(e) => update("subtitle_cz", e.target.value)} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description_en">Description (EN)</Label>
            <Textarea id="description_en" value={form.description_en} onChange={(e) => update("description_en", e.target.value)} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description_cz">Description (CZ)</Label>
            <Textarea id="description_cz" value={form.description_cz} onChange={(e) => update("description_cz", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" min="0" step="0.01" value={form.price} onChange={(e) => update("price", Number(e.target.value))} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price_currency">Currency</Label>
            <select
              id="price_currency"
              value={form.price_currency}
              onChange={(e) => update("price_currency", e.target.value)}
              className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm"
            >
              <option value="CZK">CZK</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="display_order">Display order</Label>
            <Input id="display_order" type="number" value={form.display_order} onChange={(e) => update("display_order", Number(e.target.value))} />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField previewUrl={product?.imageUrl} onChange={(img) => setImage(img)} label="Product image" />
          </div>
        </CardContent>
      </Card>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex flex-wrap gap-3">
        <Button type="submit" disabled={saving}>
          {saving ? "Saving…" : product ? "Save changes" : "Create product"}
        </Button>
        {product && (
          <Button type="button" variant="destructive" disabled={saving} onClick={handleDelete}>
            Delete
          </Button>
        )}
      </div>
    </form>
  );
}
