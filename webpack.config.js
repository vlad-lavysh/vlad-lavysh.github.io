const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const pagesDir = path.resolve(__dirname, "src", "pages");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    // --------- Hotel pages -----------
    new HTMLWebpackPlugin({
      template: `${pagesDir}/enter/enter.pug`,
      filename: "./pages/enter.html",
    }),
    new HTMLWebpackPlugin({
      template: `${pagesDir}/registration/registration.pug`,
      filename: "./pages/registration.html",
    }),
    new HTMLWebpackPlugin({
      template: `${pagesDir}/search/search.pug`,
      filename: "./pages/search.html",
    }),
    // ---------------------------------
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
      {
        test: /\.(png|jpg|svg|ttf|woff)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets",
            },
          },
        ],
      },
    ],
  },
};
