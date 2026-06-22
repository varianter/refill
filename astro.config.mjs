// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), react()],
  output: "server",
  adapter: vercel(),
  image: {
    responsiveStyles: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["sharp"],
    },
    ssr: {
      external: ["sharp"],
    },
    resolve: {
      dedupe: ["sharp"],
    },
  },
});
