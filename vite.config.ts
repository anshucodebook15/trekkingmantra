import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    host: '0.0.0.0', // allow external devices
    port: 5173,       // or any other port
  },
  build: {
    outDir: 'dist',
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
