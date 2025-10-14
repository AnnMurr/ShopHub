import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type Mode = "development" | "production"

interface EnvVariables {
  port: number;
  mode: Mode;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === "development";

  const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      clean: true,
      publicPath: "/",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        scriptLoading: "defer",
      }),
      !isDev && new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[id].[contenthash].css",
      }),
    ].filter(Boolean),
    devServer: isDev ? {
      static: "./dist",
      port: env.port ?? 3000,
      open: true,
      historyApiFallback: true,
    } : undefined,
    mode: env.mode ?? "development",
    optimization: {
      usedExports: true,
    }
  }

  return config;
}
