import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  // Base URL para producción, importante para rutas relativas
  base: "./",
  build: {
    // Aseguramos que todos los assets se carguen con rutas relativas
    assetsInlineLimit: 0,
    assetsDir: "assets",
  },
});
