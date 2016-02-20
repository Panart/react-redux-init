import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './markup/webpack.config'

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: {
    index: 'index_markup.html'
  }
}).listen(config.port, (err, result) => {
  console.log(`Listening at localhost:${ config.port }`)
});