const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const gulpif = require('gulp-if');

module.exports = function (args, reload) {
  gulp.task('htmlmin', function () {
    gulp.src('./src/**/*.html')
      .pipe(gulpif(args.production, htmlmin(
        {
          collapseWhitespace: true,
          removeComments: true
        }
      )))
      .pipe(gulp.dest('./dist'));
    if (!args.production) reload();
  });
};
