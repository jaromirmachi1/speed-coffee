import { notFound } from "next/navigation";
import { getAdminOrder } from "@/lib/admin/sanity-admin";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/admin/ui/card";
import { OrderStatusBadge, OrderStatusForm } from "@/components/admin/OrderStatusForm";

type PageProps = { params: Promise<{ id: string }> };

function formatDate(value: string) {
  return new Date(value).toLocaleString("cs-CZ", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminOrderDetailPage({ params }: PageProps) {
  const { id } = await params;
  const order = await getAdminOrder(id);
  if (!order) notFound();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">Order #{order.orderNumber}</h1>
        <OrderStatusBadge status={order.status} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Customer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><span className="text-zinc-500">Name:</span> {order.customerName || "—"}</p>
            <p><span className="text-zinc-500">Email:</span> {order.customerEmail || "—"}</p>
            <p><span className="text-zinc-500">Phone:</span> {order.customerPhone || "—"}</p>
            <p><span className="text-zinc-500">Placed:</span> {formatDate(order._createdAt)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shipping</CardTitle>
          </CardHeader>
          <CardContent className="text-sm whitespace-pre-wrap">
            {order.shippingAddress || "—"}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Items</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {order.items?.length ? (
            order.items.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b border-zinc-100 pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium">
                    {item.productTitle || "Product"}
                    {item.variantTitle ? ` (${item.variantTitle})` : ""}
                  </p>
                  <p className="text-sm text-zinc-500">Qty {item.quantity}</p>
                </div>
                <p className="text-sm font-medium">
                  {item.unitPrice ?? "—"} {item.currency || order.currency || "CZK"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-zinc-500">No items recorded.</p>
          )}
          <div className="flex justify-between border-t border-zinc-200 pt-4 font-semibold">
            <span>Total</span>
            <span>{order.total ?? "—"} {order.currency || "CZK"}</span>
          </div>
        </CardContent>
      </Card>

      <OrderStatusForm order={order} />
    </div>
  );
}
