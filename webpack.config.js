import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env) => {
  const isDev = env.mode === 'development';

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        scriptLoading: 'defer',
      }),
      !isDev &&
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
          chunkFilename: '[id].[contenthash].css',
        }),
      new CopyPlugin({
        patterns: [{ from: 'public/_redirects', to: '' }],
      }),
    ].filter(Boolean),
    devServer: isDev
      ? {
          static: './dist',
          port: env.port || 3000,
          open: true,
          historyApiFallback: true,
        }
      : undefined,
    mode: env.mode || 'development',
    optimization: {
      usedExports: true,
    },
  };
};
