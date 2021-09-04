const webpack = require('webpack');
const base = require('./webpack.config.base.js');
const { merge } = require('webpack-merge');

const PORT = 3001;

const config = {
  mode: 'development',

  devServer: {
    static: {
      directory: '../',
    },
    compress: true,
    port: PORT,
    open: true,

  },

  optimization: {
    nodeEnv: 'development',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  devtool: 'source-map',
};

module.exports = merge(base, config);