// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://art5concept.github.io',
  base: '/Melisa-Portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});