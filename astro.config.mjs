import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  site: "https://aura-pesu.github.io",
  integrations: [mdx(), sitemap(), react(), tailwind()],
});