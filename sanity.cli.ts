import path from "path";
import { fileURLToPath } from "url";
import { config as loadEnv } from "dotenv";
import { defineCliConfig } from "sanity/cli";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env.local so projectId/dataset are available (CLI runs in Node; Vite bundle needs define below)
loadEnv({ path: path.resolve(__dirname, ".env.local") });

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  },
  vite: (config) => ({
    ...config,
    envPrefix: ["NEXT_PUBLIC_", "VITE_"],
    define: {
      ...config.define,
      "import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID": JSON.stringify(
        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ""
      ),
      "import.meta.env.NEXT_PUBLIC_SANITY_DATASET": JSON.stringify(
        process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production"
      ),
    },
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": path.resolve(__dirname, "src"),
      },
    },
  }),
});
