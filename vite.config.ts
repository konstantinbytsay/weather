import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import vitePluginSass from "vite-plugin-sass";
// Получаем __dirname в среде ES-модулей
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSass()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
    },
  },
});
