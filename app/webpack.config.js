var path = require('path');
var webpack = require('webpack');

var port = 3000;

module.exports = {

  port: port,

  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    './app/app'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.app.dev.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      globalComponents: __dirname + '/../globalComponents/components',
      components: __dirname + '/components',
      ActionTypes: __dirname + '/constants/ActionTypes',
      Actions: __dirname + '/actions',
      urls: __dirname + '/constants/urls'
    }
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /(node_modules)/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
      },
    ],
  },

  devtool: 'source-map'

}