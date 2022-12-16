const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config();

/* PLUGINS */
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractWebpackPugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDevelopment = process.env.NODE_MODE === 'development';
const isProduction = !isDevelopment;

/* Setup Dev Server for development on port: env.DEV_SERVER_PORT or 3000 */
const setupDevServer = () => {
  if (isDevelopment) {
    return {
      port: process.env.DEV_SERVER_PORT || 3000,
      open: true,
    };
  }
};

/* List of css loaders  */
const cssLoaders = (extra) => {
  let loaders = [
    {
      loader: MiniCSSExtractWebpackPugin.loader,
      options: {
        publicPath: '',
      },
    },
    'css-loader',
    'postcss-loader',
  ];

  if (extra) {
    loaders = [...loaders, ...extra];
  }

  return loaders;
};

const setupPlugins = () => {
  let defaultPlugins = [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProduction,
      },
      scriptLoading: 'defer',
      prefetch: ['*.css'],
      preload: ['*.css'],
    }),
    new ResourceHintWebpackPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon'),
          to: path.resolve(__dirname, 'docs/assets/favicon'),
        },
        {
          from: path.resolve(__dirname, 'src/assets/images'),
          to: path.resolve(__dirname, 'docs/assets/images'),
        },
        {
          from: path.resolve(__dirname, 'src/assets/fonts'),
          to: path.resolve(__dirname, 'docs/assets/fonts'),
        },
      ],
    }),
    new MiniCSSExtractWebpackPugin({
      filename: '[name].css',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ];

  return defaultPlugins;
};

module.exports = {
  target: 'web',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: isDevelopment ? 'index.[contenthash].js' : '[name].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              'imagemin-gifsicle',
              ['imagemin-mozjpeg', { quality: 30 }],
              'imagemin-pngquant',
              'imagemin-svgo',
            ],
          },
        },
        generator: [
          {
            preset: 'webp',
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ['imagemin-webp'],
            },
          },
        ],
      }),
    ],
  },
  devServer: setupDevServer(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders([
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ]),
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images',
            filename: '[hash][ext][query]',
          },
        },
      },

      {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: 'asset',
      },
    ],
  },
  plugins: setupPlugins(),
};
