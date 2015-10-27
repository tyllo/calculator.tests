import gulp from 'gulp'
import config from '../config'

gulp.task('watch', () => {
  gulp.watch(config.scripts.watch, ['scripts'])
  gulp.watch(config.jade.watch, ['jade'])
})
