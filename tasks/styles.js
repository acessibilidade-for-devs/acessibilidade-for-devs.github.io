const gulp = require('gulp')
const sass = require('gulp-sass')
const gulpif = require('gulp-if')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')

module.exports = function (args, reload) {
  gulp.task('sass', function () {
    gulp.src('./src/assets/sass/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulpif(args.production, postcss([autoprefixer({
        browsers: ['last 9 versions']
      })])))
      .pipe(gulp.dest('./static/css/'))
    if (!args.production) reload()
  })
}
