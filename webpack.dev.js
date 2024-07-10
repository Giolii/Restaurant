const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    hot: true,  // Enable HMR on the devServer
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),  // Add the plugin
  ],
  optimization: {
    runtimeChunk: 'single',
  },
});
