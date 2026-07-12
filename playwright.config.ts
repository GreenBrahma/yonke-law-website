import { defineConfig } from "@playwright/test";

/* Playwright config for the Values Statement acceptance test.
   Tests run against the HTTP dev server (never file://) so that
   shape-outside can load its mask over http and is NOT silently
   ignored. */
export default defineConfig({
  testDir: "./tests",
  timeout: 90_000,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3000",
    viewport: { width: 1440, height: 2200 },
  },
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 180_000,
  },
});
