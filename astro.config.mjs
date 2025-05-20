// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react()],

  // output: "static" significa que Astro intentará prerenderizar todo por defecto
  // Cada página será exportada como HTML estático a menos que se indique lo contrario
  
  // Si export const prerender = true; → fuerza la prerenderización de esa página (estática)
  // Si export const prerender = false; → esa página se generará dinámicamente en el servidor

  output: "static",

  // Aunque uses output: "static", puedes usar un adaptador como Node
  // para soportar rutas dinámicas si alguna página tiene prerender = false
  adapter: node({
    mode: 'standalone',
  }),
});
