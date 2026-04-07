import { createClient, type SanityClient } from "next-sanity";

/**
 * Server-only client for sensitive reads (e.g. orders).
 * Use SANITY_API_READ_TOKEN if the dataset is private or you want authenticated API access.
 * Product catalog can keep using the public client in `client.ts`.
 */
export function getSanityServerClient(): SanityClient | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
  if (!projectId) return null;

  return createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN,
  });
}

/**
 * Server-only client for writes (orders, admin automations).
 * Use SANITY_API_WRITE_TOKEN (recommended) or fallback to SANITY_API_READ_TOKEN
 * if that token has write grants.
 */
export function getSanityServerWriteClient(): SanityClient | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
  const token = process.env.SANITY_API_WRITE_TOKEN ?? process.env.SANITY_API_READ_TOKEN;
  if (!projectId || !token) return null;

  return createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: false,
    token,
  });
}
