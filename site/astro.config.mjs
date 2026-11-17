import { defineConfig } from 'astro/config';

// En local dev (npm run dev / localhost), la base est '/'
// Pour les builds de production et GitHub Actions, la base est '/Team-sens' pour GitHub Pages
const isCI = process.env.GITHUB_ACTIONS === 'true' || process.env.CI === 'true';
const isBuild = process.argv.includes('build');
const defaultBase = (isCI || isBuild) ? '/Team-sens' : '/';

export default defineConfig({
  site: 'https://0shin6.github.io',
  base: process.env.ASTRO_BASE || defaultBase,
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
