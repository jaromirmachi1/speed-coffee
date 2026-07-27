import { ProductForm } from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">New product</h1>
        <p className="mt-1 text-zinc-500">Add a product to the shop.</p>
      </div>
      <ProductForm />
    </div>
  );
}
