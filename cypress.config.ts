import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    video: false,
    specPattern: "cypress/e2e/**/*.cy.ts",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {},
  },
  component: {
    video: false,
    specPattern: "src/**/*.cy.tsx",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
