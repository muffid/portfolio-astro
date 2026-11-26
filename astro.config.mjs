// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Ganti dengan domain kamu saat deploy, mis. 'https://namakamu.dev'
  // site: 'https://namakamu.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
