// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nalsec.com",
  trailingSlash: "always",
  redirects: {
    "/services/vitzro-cell/": "/products/vitzrocell-er/",
    "/services/ecocharge/": "/",
    "/services/dc-power-system/": "/",
    "/services/energy-warehouse/": "/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
