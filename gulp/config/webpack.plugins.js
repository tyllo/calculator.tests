import webpack from 'webpack'

export default [
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.DedupePlugin(),
]
