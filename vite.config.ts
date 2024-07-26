import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import MDPlugin from "./plugins/vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), MDPlugin()],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
