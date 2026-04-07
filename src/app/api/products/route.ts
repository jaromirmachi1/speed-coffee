import { NextRequest, NextResponse } from "next/server";
import { fetchProducts } from "@/app/actions/products";

export async function GET(request: NextRequest) {
  try {
    const lang = request.nextUrl.searchParams.get("lang");
    const language = lang === "cz" ? "cz" : "en";
    const products = await fetchProducts(language);
    return NextResponse.json({ ok: true, products });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Failed to load products",
        products: [],
      },
      { status: 500 }
    );
  }
}
