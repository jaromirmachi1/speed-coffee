import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { adminStructure } from "./src/sanity/adminStructure";
import { schemaTypes } from "./schemas";

// Use process.env (Next.js/Vercel set this); fallback so Sanity Studio works without env.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "wc4zush4";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

/** Must match the Next.js route: `src/app/studio/[[...tool]]/page.tsx` */
const studioBasePath = "/studio";

export default defineConfig({
  name: "speed-coffee",
  title: "Speed Coffee — Admin",
  basePath: studioBasePath,
  projectId,
  dataset,
  plugins: [structureTool({ structure: adminStructure })],
  schema: {
    types: schemaTypes,
  },
});
