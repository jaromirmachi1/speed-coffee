import { notFound } from "next/navigation";
import { getAdminProduct } from "@/lib/admin/sanity-admin";
import { ProductForm } from "@/components/admin/ProductForm";

type PageProps = { params: Promise<{ id: string }> };

export default async function EditProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getAdminProduct(id);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Edit product</h1>
        <p className="mt-1 text-zinc-500">{product.title_cz || product.title_en}</p>
      </div>
      <ProductForm product={product} />
    </div>
  );
}
