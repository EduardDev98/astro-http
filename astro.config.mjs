import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  adapter: cloudflare(),
  integrations: [mdx(), sitemap(), react()],
  vite: {
    ssr: {
      external: ['react-dom/server'],
      noExternal: ['@astrojs/react'],
    },
  },
});
