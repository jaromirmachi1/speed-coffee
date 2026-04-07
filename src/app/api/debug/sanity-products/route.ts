import { NextResponse } from "next/server";
import { sanityClient, isSanityConfigured } from "@/lib/sanity/client";

const PRODUCTS_GROQ = `*[_type == "product" && is_active == true] | order(display_order asc) {
  _id,
  title_en,
  title_cz,
  is_active
}`;

export async function GET() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? null;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
  const configured = isSanityConfigured();

  try {
    const docs = configured ? await sanityClient.fetch<Array<{ _id: string; title_en?: string; title_cz?: string }>>(PRODUCTS_GROQ) : [];
    return NextResponse.json({
      ok: true,
      configured,
      projectId,
      dataset,
      count: docs.length,
      sample: docs.slice(0, 5),
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        configured,
        projectId,
        dataset,
        error: error instanceof Error ? error.message : "Unknown Sanity error",
      },
      { status: 500 }
    );
  }
}
