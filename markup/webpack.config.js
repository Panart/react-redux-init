var path = require('path');
var webpack = require('webpack');

var port = 3010

module.exports = {

  port: port,

  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    './markup/app'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.markup.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      globalComponents: __dirname + '/../globalComponents/components',
      globalComponentsKit: __dirname + '/../globalComponents/docs',
      components: __dirname + '/components/index'
    }
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /(node_modules)/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
      }
    ]
  },

  devtool: 'source-map'

}