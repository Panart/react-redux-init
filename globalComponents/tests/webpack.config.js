'use strict';

var webpack = require('webpack'),
  path = require('path');

module.exports = {

  entry: {
    app: './test.js',
  },

  output: {
    path: path.join(__dirname, ''),
    filename: "bundle.test.js",
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      globalComponents: __dirname + '/../components',
    },
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          // plugins: ['babel-plugin-add-module-exports'],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
  ],

}