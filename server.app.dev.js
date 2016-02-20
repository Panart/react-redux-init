import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './app/webpack.config'

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: {
    index: 'index_app_dev.html'
  }
}).listen(config.port, (err, result) => {
  console.log(`Listening at localhost:${ config.port }`)
});
