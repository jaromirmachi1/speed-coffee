import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

// Env vars often don't reach the browser bundle when running Sanity CLI; fallback so Studio works.
const projectId =
  (typeof import.meta !== "undefined" && import.meta.env?.NEXT_PUBLIC_SANITY_PROJECT_ID) ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  "wc4zush4";
const dataset =
  (typeof import.meta !== "undefined" && import.meta.env?.NEXT_PUBLIC_SANITY_DATASET) ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

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
