const gulp = require('gulp');

module.exports = function (args, reload) {
  gulp.task('script', function () {
    gulp.src('./src/**/*.js').pipe(gulp.dest('./dist/'));
    if (!args.production) reload();
  });
};
