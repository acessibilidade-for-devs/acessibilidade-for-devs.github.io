const gulp = require('gulp');
const minifyCss = require('gulp-clean-css');
const sass = require('gulp-sass');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');

module.exports = function (args, reload) {
  gulp.task('sass', function () {
    gulp.src('./src/assets/sass/**/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulpif(args.production, gulp.dest('./dist/css/')))
      .pipe(gulpif(args.production, minifyCss()))
      .pipe(gulpif(args.production, rename('all.min.css')))
      .pipe(gulp.dest('./dist/css/'));
    if (!args.production) reload();
  });
};
