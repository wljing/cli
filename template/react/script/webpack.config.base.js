const webpack = require('webpack');
const Happypack = require('happypack');
const { resolve } = require("path");
const os = require('os');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const happypackPool = Happypack.ThreadPool({ size: os.cpus().length });

const plugins = [
  // happypack plugins
  new Happypack({
    id: 'js',
    threads: 3,
    verbose: false,
    loaders: ['babel-loader?cacheDirectory=true'],
    threadPool: happypackPool,
    debug: false,
  }),
  new Happypack({
    id: 'ts',
    loaders: ['babel-loader?cacheDirectory=true'],
    threadPool: happypackPool,
  }),
  new Happypack({
    id: 'css',
    loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    threadPool: happypackPool,
  }),
  new Happypack({
    id: 'sass',
    loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    threadPool: happypackPool,
  }),
  new Happypack({
    id: 'file',
    loaders: ['file-loader'],
    threadPool: happypackPool,
  }),

  new htmlWebpackPlugin({
    template: resolve('index.html'),
    filename: 'index.html'
  }),
];

const config = {
  entry: {
    app: './index.js',
    vendors: ['react', 'react-dom'],
  },
  
  output: {
    path: resolve('dist'),
    filename: '[name]_[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['happypack/loader?id=js'],
        exclude: /node_module/,
      },
      {
        test: /\.tsx?$/,
        use: ['happypack/loader?id=ts'],
        exclude: /node_module/,
      },
      {
        test: /\.css$/,
        use: ['happypack/loader?id=css'],
      },
      {
        test: /\.scss$/,
        use: ['happypack/loader?id=sass'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['happypack/loader?id=file'],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.json'],
  },

  devtool: 'eval-source-map',

  plugins,
};

module.exports = config;