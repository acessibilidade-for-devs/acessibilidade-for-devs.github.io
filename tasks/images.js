const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const gulpif = require('gulp-if');

module.exports = function (args, reload) {
  gulp.task('imagemin', function () {
    gulp.src('./src/assets/img/**/*')
      .pipe(gulpif(args.production, imagemin()))
      .pipe(gulp.dest('dist/img'));
    if (!args.production) reload();
  });
};
