// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Keep in sync with `site.url` in src/config/site.ts.
// SITE and BASE_PATH are set by the GitHub Pages workflow; locally the defaults apply.
export default defineConfig({
  site: process.env.SITE ?? "https://ceylonwayfarer.com",
  base: process.env.BASE_PATH ?? "/",
  output: "static",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
