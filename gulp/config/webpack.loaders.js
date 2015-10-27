// import ExtractTextPlugin from 'extract-text-webpack-plugin'

var loaders = {}

loaders.jade = { test: /\.jade/, loader: 'template-html-loader' }

loaders.js = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel',
  query: {
    // optional: ['runtime'],
    stage: 0
  }
}

export default [
  loaders.js,
  loaders.jade,
]
