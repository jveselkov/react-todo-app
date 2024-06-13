import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    video: false,
    specPattern: "cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on) {
      on("file:preprocessor", vitePreprocessor());
    },
  },
  component: {
    video: false,
    specPattern: "src/**/*.spec.tsx",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
