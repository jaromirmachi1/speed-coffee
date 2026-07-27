"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/admin/ui/badge";
import { Button } from "@/components/admin/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/admin/ui/card";
import type { AdminOrder } from "@/lib/admin/sanity-admin";

const statuses = ["pending", "paid", "fulfilled", "cancelled"] as const;

function statusVariant(status: string) {
  if (status === "paid") return "success";
  if (status === "fulfilled") return "secondary";
  if (status === "cancelled") return "danger";
  return "warning";
}

export function OrderStatusForm({ order }: { order: AdminOrder }) {
  const router = useRouter();
  const [status, setStatus] = useState(order.status);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/orders/${order._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Update failed");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Update status</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap items-end gap-3">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm"
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving…" : "Save status"}
        </Button>
        {error && <p className="w-full text-sm text-red-600">{error}</p>}
      </CardContent>
    </Card>
  );
}

export function OrderStatusBadge({ status }: { status: string }) {
  return <Badge variant={statusVariant(status)}>{status}</Badge>;
}
