const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const progress = new webpack.ProgressPlugin((percentage, message, ...args) => {
  console.info(percentage, message, ...args);
});

module.exports = function (env, argv) {


  return {
    mode: env.WEBPACK_SERVE ? 'development' : 'production',
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[id]-[name]-[contenthash].js",
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        { test: /\.ts$/, use: "ts-loader" },
      ],
    },
    plugins: [progress, new HtmlWebpackPlugin()],
  };
};
