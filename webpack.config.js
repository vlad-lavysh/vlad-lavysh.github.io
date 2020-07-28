const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.pug",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.ttf$/,
        use: ["file-loader"],
      },
    ],
  },
};
