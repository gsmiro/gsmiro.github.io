"use strict";

let gulp = require('gulp');
let sass = require('gulp-sass');
 
gulp.task('styles', function(){
  return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css')) 
});
gulp.task('polymer', function(){
  return gulp.src('polymer/bs-timeline/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('polymer/bs-timeline')) 
});