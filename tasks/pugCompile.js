const gulp = require('gulp')
const pug = require('gulp-pug')

module.exports = function (args, reload) {
  gulp.task('compilePug', () => {
    gulp.src('./src/templates/*.pug')
      .pipe(pug({}))
      .pipe(gulp.dest('./'))
    if (!args.production) reload()
  })
}
