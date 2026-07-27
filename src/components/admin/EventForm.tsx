"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/admin/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/admin/ui/card";
import { Input } from "@/components/admin/ui/input";
import { Label } from "@/components/admin/ui/label";
import { Textarea } from "@/components/admin/ui/textarea";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import type { AdminEvent } from "@/lib/admin/sanity-admin";

type SanityImageRef = {
  _type: "image";
  asset: { _type: "reference"; _ref: string };
};

type EventFormProps = {
  event?: AdminEvent;
};

function toLocalInput(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function EventForm({ event }: EventFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<SanityImageRef | null>(null);

  const [form, setForm] = useState({
    title_en: event?.title_en ?? "",
    title_cz: event?.title_cz ?? "",
    description_en: event?.description_en ?? "",
    description_cz: event?.description_cz ?? "",
    startDate: toLocalInput(event?.startDate),
    endDate: toLocalInput(event?.endDate),
    location_en: event?.location_en ?? "",
    location_cz: event?.location_cz ?? "",
    externalUrl: event?.externalUrl ?? "",
    linkLabel_en: event?.linkLabel_en ?? "Learn more",
    linkLabel_cz: event?.linkLabel_cz ?? "Více informací",
    featured: event?.featured ?? false,
    isPublished: event?.isPublished !== false,
    display_order: event?.display_order ?? 0,
  });

  const update = (key: keyof typeof form, value: string | number | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const payload = { ...form, ...(image ? { image } : {}) };
    const url = event ? `/api/admin/events/${event._id}` : "/api/admin/events";
    const method = event ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      router.push("/admin/events");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!event || !confirm("Delete this event?")) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/events/${event._id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");
      router.push("/admin/events");
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
          <CardTitle>Event details</CardTitle>
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
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description_en">Description (EN)</Label>
            <Textarea id="description_en" value={form.description_en} onChange={(e) => update("description_en", e.target.value)} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description_cz">Description (CZ)</Label>
            <Textarea id="description_cz" value={form.description_cz} onChange={(e) => update("description_cz", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="startDate">Start</Label>
            <Input id="startDate" type="datetime-local" value={form.startDate} onChange={(e) => update("startDate", e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endDate">End (optional)</Label>
            <Input id="endDate" type="datetime-local" value={form.endDate} onChange={(e) => update("endDate", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location_en">Location (EN)</Label>
            <Input id="location_en" value={form.location_en} onChange={(e) => update("location_en", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location_cz">Location (CZ)</Label>
            <Input id="location_cz" value={form.location_cz} onChange={(e) => update("location_cz", e.target.value)} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="externalUrl">External link</Label>
            <Input id="externalUrl" type="url" value={form.externalUrl} onChange={(e) => update("externalUrl", e.target.value)} placeholder="https://..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="display_order">Display order</Label>
            <Input id="display_order" type="number" value={form.display_order} onChange={(e) => update("display_order", Number(e.target.value))} />
          </div>
          <div className="flex flex-col gap-3 justify-end">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={form.featured} onChange={(e) => update("featured", e.target.checked)} />
              Featured (large card)
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={form.isPublished} onChange={(e) => update("isPublished", e.target.checked)} />
              Published
            </label>
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              previewUrl={event?.imageUrl}
              onChange={(img) => setImage(img)}
            />
          </div>
        </CardContent>
      </Card>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex flex-wrap gap-3">
        <Button type="submit" disabled={saving}>
          {saving ? "Saving…" : event ? "Save changes" : "Create event"}
        </Button>
        {event && (
          <Button type="button" variant="destructive" disabled={saving} onClick={handleDelete}>
            Delete
          </Button>
        )}
      </div>
    </form>
  );
}
