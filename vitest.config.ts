import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@app/shared': resolve(__dirname, 'packages/shared/src/index.ts'),
      '@app/core': resolve(__dirname, 'packages/core/src/index.ts'),
      '@app/web': resolve(__dirname, 'packages/web/src/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    coverage: {
      enabled: false,
    },
  },
});
