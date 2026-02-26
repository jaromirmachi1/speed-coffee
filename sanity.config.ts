import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

// Use process.env (Next.js/Vercel set this); fallback so Sanity Studio works without env.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "wc4zush4";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "speed-coffee",
  title: "Speed Coffee",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
