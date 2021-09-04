const base = require('./webpack.config.base.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const config = {
  mode: 'production',

  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: { // 这里开始设置缓存的 chunks
        asd: { // key 为entry中定义的 入口名称
          chunks: "all", // 必须三选一： "initial" | "all" | "async"(默认就是async) 
          test: /node_modules/, // 正则规则验证，如果符合就提取 chunk
          name: "asd", // 要缓存的 分隔出来的 chunk 名称 
          minSize: 100,
          minChunks: 1,
          enforce: true,
          maxAsyncRequests: 5, // 最大异步请求数， 默认1
          maxInitialRequests: 3, // 最大初始化请求书，默认1
          reuseExistingChunk: true // 可设置是否重用该chunk
        }
      }
    },
    nodeEnv: 'production',
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],

	devtool: 'cheap-source-map',
};

module.exports = merge(base, config);