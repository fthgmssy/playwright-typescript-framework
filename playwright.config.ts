import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests",
  timeout: 30000,
  retries: 1,
  reporter: [["html"], ["allure-playwright"]],
  use: {
    baseURL: "https://the-internet.herokuapp.com",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox",  use: { ...devices["Desktop Firefox"] } },
  ],
});
