import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://example.com',
  output: 'server', // o 'static' si quieres prerender
  adapter: cloudflare(),
  integrations: [mdx(), sitemap()],
});
