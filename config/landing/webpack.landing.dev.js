var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('../webpack.common.js');
var helpers = require('../helpers');
var path = require('path');
var directorio = path.resolve(__dirname, '../../');
const config = require('../environments/.env.dev.js');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = webpackMerge(commonConfig, {

    module: {
        rules: [
          {
            test: /\.css$/,
            exclude: helpers.root('src', 'landing', 'app'),
            use: ExtractTextPlugin.extract({ fallback: 'style-loader', loader: 'css-loader?sourceMap' })
          },
          {
            test: /\.css$/,
            include: helpers.root('src', 'landing'),
            loaders: ['style-loader', 'css-loader', 'resolve-url-loader']
          },
          // loader for angular components
          {
            test: /\.scss$/,
            include: helpers.root('src', 'landing', 'app'),
            loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
          },
          // all sass imports in ts without angular components 
          {
            test: /\.(scss|sass)$/,
            exclude: helpers.root('src', 'landing', 'app'),
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'postcss-loader', 'sass-loader'] })
          }
    
        ]
      },
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'polyfills': './src/landing/polyfills.ts',
        'vendor': './src/landing/vendor.ts',
        'app': './src/landing/main.ts'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, "../src/landing"), 'src', "node_modules"],
        alias: {
            assets: directorio + '/src/landing/assets'
        }
    },

    output: {
        path: directorio + '/src/landing',
        publicPath: 'http://localhost:5200/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': config
        }),
        new HtmlWebpackPlugin({
            template: './src/landing/index.html',
            chunksSortMode: 'dependency'
        }),
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }


});