"use strict";

let gulp = require('gulp');
let sass = require('gulp-sass');
 
gulp.task('styles', function(){
  return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css')) 
});