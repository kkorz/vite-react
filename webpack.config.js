const path = require("path");
const fse = require("fs-extra");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 打包后抽离 css 文件
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin"); // css压缩
const FileManagerPlugin = require("filemanager-webpack-plugin"); // 操作打包文件
const { themeVariables } = require("./src/config/theme");

const appDirectory = fse.realpathSync(process.cwd()); // 当前项目根目录
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const targetDir = resolveApp("../vite-react-page"); // target目录，此处是vite-react-page项目根目录

module.exports = {
  mode: "production",
  entry: "./src/main.jsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].[contenthash:8].bundle.js",
    clean: true, // 在生成文件之前清空 output 目录
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader?cacheDirectory=true"],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: themeVariables,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new OptimizeCssPlugin(),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [{ source: "./dist", destination: targetDir }],
        },
      },
    }),
  ],
};
