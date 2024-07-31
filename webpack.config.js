const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: { static: "./dist", watchFiles: [".src/**"] },
  plugins: [new HtmlWebpackPlugin({})],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
