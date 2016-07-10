'use strict';

var gulp = require('gulp');
var size = require('gulp-size');
var zip = require('gulp-zip');

gulp.task('compress', function() {
  return gulp.src('dist/**/*')
    .pipe(zip('dist.zip'))
    .pipe(size({ title: 'Compress dist folder', gzip: false, showFiles: true }))
    .pipe(gulp.dest('./'));
});
