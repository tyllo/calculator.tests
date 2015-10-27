import gulp from 'gulp'
import errorHandler from '../helpers/errorHandler'
import config from '../config/scripts'
import configWebpack from '../config/webpack'

import sourcemaps from 'gulp-sourcemaps'
import webpack from 'webpack-stream'

gulp.task('scripts', () =>
  gulp
    .src(config.src)
    .pipe(errorHandler())
    .pipe(webpack(configWebpack))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
)
