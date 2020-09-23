const path = require("path");
//const fs = require("fs");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const pagesDir = path.resolve(__dirname, "src", "pages");
//const pages = fs.readdirSync(path.resolve(__dirname, "src", "pages"));

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    index: "./index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "docs"),
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
      //filename: "./pages/search.html",
      filename: "./index.html",
    }),
    new HTMLWebpackPlugin({
      template: `${pagesDir}/rooms/rooms.pug`,
      filename: "./pages/rooms.html",
    }),
    new HTMLWebpackPlugin({
      template: `${pagesDir}/room-details/room-details.pug`,
      filename: "./pages/room-details.html",
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
        test: /\.(jpg|svg|ttf|woff)$/,
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
