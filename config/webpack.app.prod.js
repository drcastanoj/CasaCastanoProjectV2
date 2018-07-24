var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const config = require('./environments/.env.prod.js');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: helpers.root('../', 'server', 'dist' , 'public'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': config
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    }),
    new CleanWebpackPlugin(['*'], {
        root: helpers.root('../', 'server', 'dist'),
        verbose: true,
        dry: false
      })
  ]
});