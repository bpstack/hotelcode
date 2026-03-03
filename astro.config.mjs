// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://hotelcode.stackbp.es',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
