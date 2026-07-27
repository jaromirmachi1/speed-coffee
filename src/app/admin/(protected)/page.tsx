import Link from "next/link";
import { CalendarDays, Package, ShoppingBag } from "lucide-react";
import { getAdminStats } from "@/lib/admin/sanity-admin";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/admin/ui/card";

export default async function AdminDashboardPage() {
  const stats = await getAdminStats();

  const cards = [
    {
      title: "Events",
      value: stats.events,
      href: "/admin/events",
      icon: CalendarDays,
      hint: "Manage upcoming appearances",
    },
    {
      title: "Products",
      value: stats.products,
      href: "/admin/products",
      icon: Package,
      hint: "Edit shop catalog",
    },
    {
      title: "Orders",
      value: stats.orders,
      href: "/admin/orders",
      icon: ShoppingBag,
      hint: `${stats.pendingOrders} pending`,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-zinc-500">
          Manage your store content without opening Sanity Studio.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-zinc-500">
                  {card.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-zinc-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{card.value}</div>
                <p className="mt-1 text-xs text-zinc-500">{card.hint}</p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-3 text-sm font-medium hover:bg-zinc-100"
                >
                  Open
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
