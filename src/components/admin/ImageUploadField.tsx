"use client";

import { useState } from "react";
import { Button } from "@/components/admin/ui/button";
import { Input } from "@/components/admin/ui/input";
import { Label } from "@/components/admin/ui/label";

type SanityImageRef = {
  _type: "image";
  asset: { _type: "reference"; _ref: string };
};

type ImageUploadFieldProps = {
  label?: string;
  previewUrl?: string;
  onChange: (image: SanityImageRef | null, previewUrl: string | null) => void;
};

export function ImageUploadField({
  label = "Cover image",
  previewUrl,
  onChange,
}: ImageUploadFieldProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [localPreview, setLocalPreview] = useState<string | null>(previewUrl ?? null);

  const handleFile = async (file: File | null) => {
    if (!file) return;
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      const objectUrl = URL.createObjectURL(file);
      setLocalPreview(objectUrl);
      onChange(data.image, objectUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {localPreview ? (
          <img
            src={localPreview}
            alt="Preview"
            className="h-32 w-32 rounded-lg object-cover border border-zinc-200"
          />
        ) : (
          <div className="flex h-32 w-32 items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 text-xs text-zinc-400">
            No image
          </div>
        )}
        <div className="space-y-2">
          <Input
            type="file"
            accept="image/*"
            disabled={uploading}
            onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
          />
          {uploading && <p className="text-xs text-zinc-500">Uploading…</p>}
          {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
}
