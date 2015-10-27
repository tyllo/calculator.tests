import paths from '../paths'

export default {
  src: [
    paths.src + paths.scripts + '/*.js',
  ],
  dest:   paths.assets + paths.scripts,
  watch: [
    paths.src + paths.scripts + '/**/*.js',
    paths.components + '/**/*.*',
  ],
  concat: 'bundler.js',
}
