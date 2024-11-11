import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['@strapi/strapi', 'better-sqlite3', 'mongoose', 'fs-extra', 'mime-types'],
  },
});
