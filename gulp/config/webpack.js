import paths from '../paths'
import loaders from './webpack.loaders'
import plugins from './webpack.plugins'

export default {

  entry: {
    script: paths.src + paths.scripts + '/script.js',
    test: paths.src + paths.scripts + '/test.js',
  },

  output: {
    filename: '[name].js'
  },

  module: {
    loaders: loaders,
  },

  plugins: plugins,

  devtool: 'source-map'
}
