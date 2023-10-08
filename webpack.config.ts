import webpack from "webpack";
import path from "path";
import { buildWbpackConfig } from "./config/build/buildWebpackConfig";
import { BuilEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuilEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "./public", "index.html"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWbpackConfig({
    mode,
    paths: paths,
    isDev,
    port: PORT,
  });

  return config;
};
