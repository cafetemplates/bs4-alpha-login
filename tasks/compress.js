'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('compress', function() {
  return gulp.src('dist/*')
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('./'));
});
