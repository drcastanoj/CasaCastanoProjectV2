var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var tslint = require('../tslint.json');
var directorio = path.resolve(__dirname, '../');

module.exports = {
  entry: {
    'polyfills': './src/app/polyfills.ts',
    'vendor': './src/app/vendor.ts',
    'app': './src/app/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, "../src/app"), 'src', "node_modules"],
    alias: {
      assets: directorio + '/src/app/assets'
    }
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        exclude: helpers.root('node_modules'),
        options: {
          tsConfigFile: tslint,
          // tslint errors are displayed by default as warnings
          // set emitErrors to true to display them as errors
          emitErrors: true,

          // tslint does not interrupt the compilation by default
          // if you want any file with tslint errors to fail
          // set failOnHint to true
          failOnHint: true
        }
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helpers.root('./', 'tsconfig.json'),
              alias: {
                Indicadores: path.resolve(__dirname, '../')
              }
            }
          }, 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', loader: 'css-loader?sourceMap' })
      },
      {
        test: /\.css$/,
        include: helpers.root('src'),
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader']
      },
      // loader for angular components
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
      },
      // all sass imports in ts without angular components 
      {
        test: /\.(scss|sass)$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'postcss-loader', 'sass-loader'] })
      }

    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, './src'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: './src/app/index.html',
      chunksSortMode: 'dependency'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 version']
          })
        ]
      }
    }),
    new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './client')),
  ]
};


// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
