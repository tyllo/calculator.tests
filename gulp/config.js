import paths from './paths'

import scripts from './config/scripts'
import jade from './config/jade'
import webpack from './config/webpack'

export default {
  src:     paths.src,
  dest:    paths.dest,
  assets:  paths.assets,

  scripts: scripts,
  jade:    jade,
  webpack: webpack,
}
