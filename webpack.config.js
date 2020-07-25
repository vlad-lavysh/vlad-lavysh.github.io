const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      //template: "./src/index.pug",
    }),
    new CleanWebpackPlugin(),
  ],
};
