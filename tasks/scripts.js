const gulp = require('gulp')

module.exports = function (args, reload) {
  gulp.task('script', function () {
    gulp.src('./src/**/*.js').pipe(gulp.dest('./static/js'))
    if (!args.production) reload()
  })
}
