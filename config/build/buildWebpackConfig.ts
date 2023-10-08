import webpack from "webpack";
import { BuildOptions } from "./types/config";

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { webpack } = require("webpack");
// const ProgressPlugin = require("webpack").ProgressPlugin;

// import path from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// const ProgressPlugin = webpack.ProgressPlugin;

import buildPlugins from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import { buildDevserver } from "./buildDevServer";

export function buildWbpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode: mode,
    //   entry: {
    //         bundlename: path.resolve(__dirname, 'src', 'index.js'), // default bundlename -> main
    //       },
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,

    output: {
      // filename: 'bundle.js',
      filename: "[name].[contenthash].bundle.js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevserver(options) : undefined,
  };
}
