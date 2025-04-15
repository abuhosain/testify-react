/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allows using global functions like `describe`, `it`, `expect`
    environment: "jsdom", // Simulates a browser environment
    setupFiles: ["./src/setupTest.ts"], // Runs this file before your tests start
    include: ["**/__tests__/**/*.{ts,tsx}", "**/*.{spec,test}.{ts,tsx}"],
  },
});
