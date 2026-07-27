import Link from "next/link";
import { listAdminOrders } from "@/lib/admin/sanity-admin";
import { Card, CardContent } from "@/components/admin/ui/card";
import { OrderStatusBadge } from "@/components/admin/OrderStatusForm";

function formatDate(value: string) {
  return new Date(value).toLocaleString("cs-CZ", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminOrdersPage() {
  const orders = await listAdminOrders();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Orders</h1>
        <p className="mt-1 text-zinc-500">Review and fulfill customer orders.</p>
      </div>

      <div className="space-y-3">
        {orders.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-zinc-500">
              No orders yet.
            </CardContent>
          </Card>
        ) : (
          orders.map((order) => (
            <Card key={order._id}>
              <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-semibold">#{order.orderNumber}</h2>
                    <OrderStatusBadge status={order.status} />
                  </div>
                  <p className="text-sm text-zinc-600">
                    {order.customerName || "No name"} · {order.customerEmail || "No email"}
                  </p>
                  <p className="text-sm text-zinc-500">{formatDate(order._createdAt)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-semibold">
                    {order.total ?? "—"} {order.currency || "CZK"}
                  </p>
                  <Link
                    href={`/admin/orders/${order._id}`}
                    className="text-sm font-medium underline underline-offset-4"
                  >
                    View
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
