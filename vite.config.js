import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@common", replacement: path.resolve(__dirname, "src/common") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@context", replacement: path.resolve(__dirname, "src/context") },
      { find: "@data", replacement: path.resolve(__dirname, "src/data") },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@router", replacement: path.resolve(__dirname, "src/router") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
      { find: "@service", replacement: path.resolve(__dirname, "src/service") },
    ],
  },
  plugins: [react()],
});
