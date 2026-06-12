import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // This tells Astro your absolute web address on GitHub
  site: 'https://github.com/SarangSankara',
  // This tells Astro the folder name of your project on GitHub
  base: '/blog-space',
  vite: {
    plugins: [tailwindcss()],
  },
});