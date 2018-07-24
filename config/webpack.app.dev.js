var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.app.common.js');
var helpers = require('./helpers');
var path = require('path');
var directorio = path.resolve(__dirname, '../');
const config = require('./environments/.env.dev.js');
var webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: directorio + '/src/app',
    publicPath: 'http://localhost:5000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': config
    }),
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }

});