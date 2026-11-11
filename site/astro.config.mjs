import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://0shin6.github.io',
  base: '/Team-sens',
  build: {
    format: 'file'
  },
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true
        }
      }
    }
  }
});
