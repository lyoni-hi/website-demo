import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://lyoni-hi.github.io/website-demo/",
    base: "/website-demo/",
    output: "static",
    integrations: [sitemap(), svelte(), mdx()],
    vite: {
        build: {
            sourcemap: true
        }
    },
    markdown: {
        syntaxHighlight: "prism"
    }
});
