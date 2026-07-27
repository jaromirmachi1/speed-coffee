import Link from "next/link";
import { Plus } from "lucide-react";
import { listAdminProducts } from "@/lib/admin/sanity-admin";
import { Card, CardContent } from "@/components/admin/ui/card";

export default async function AdminProductsPage() {
  const products = await listAdminProducts();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Products</h1>
          <p className="mt-1 text-zinc-500">Manage shop catalog items.</p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 text-sm font-medium text-zinc-50 hover:bg-zinc-800"
        >
          <Plus className="h-4 w-4" />
          New product
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.length === 0 ? (
          <Card className="md:col-span-2 xl:col-span-3">
            <CardContent className="py-12 text-center text-zinc-500">
              No products yet.
            </CardContent>
          </Card>
        ) : (
          products.map((product) => (
            <Card key={product._id} className="overflow-hidden">
              {product.imageUrl ? (
                <img src={product.imageUrl} alt="" className="h-44 w-full object-cover" />
              ) : (
                <div className="flex h-44 items-center justify-center bg-zinc-100 text-zinc-400">
                  No image
                </div>
              )}
              <CardContent className="space-y-2 p-5">
                <h2 className="font-semibold">{product.title_cz || product.title_en}</h2>
                <p className="text-sm text-zinc-500">
                  {product.price} {product.price_currency || "CZK"}
                </p>
                <Link
                  href={`/admin/products/${product._id}`}
                  className="text-sm font-medium underline underline-offset-4"
                >
                  Edit product
                </Link>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
