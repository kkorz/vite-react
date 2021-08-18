import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { themeVariables } from "./src/config/variables";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7777,
    open: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        // antd主题色
        modifyVars: themeVariables,
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    reactRefresh(),
    ["@babel/plugin-proposal-decorators", { legacy: true }],
  ],
});
