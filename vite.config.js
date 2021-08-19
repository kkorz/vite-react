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
    // css module配置
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      hashPrefix: "prefix",
    },
    // PostCSS 配置（格式同 postcss.config.js）
    // postcss-load-config 的插件配置
    postcss: {
      plugins: [require("autoprefixer")],
    },
    //指定传递给 CSS 预处理器的选项
    preprocessorOptions: {
      less: {
        // 重写 less 变量, 定制antd样式
        modifyVars: themeVariables,
        // 支持内联 JavaScript
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
