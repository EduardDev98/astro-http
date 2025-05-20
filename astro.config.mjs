import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// import react from '@astrojs/react'; // Eliminar o comentar

export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    mdx(),
    sitemap(),
    // react(),  // Eliminar o comentar
  ],
});
