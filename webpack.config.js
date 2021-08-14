const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 打包后抽离 css 文件
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin"); // css压缩

module.exports = {
  mode: "production",
  devtool: "hidden-source-map",
  entry: "./src/main.jsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash:8].bundle.js",
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
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
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
  ],
};
