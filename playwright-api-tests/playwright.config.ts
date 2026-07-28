import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 10_000,
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'https://dummyjson.com',
    extraHTTPHeaders: {
      Accept: 'application/json',
    },
  },
});
