var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint')


gulp.task('lint', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default', {
      verbose: true
    }))
})

gulp.task('style', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function() {
    return gulp.watch(['./src/scss/**/*.scss'], ['style'])
})


gulp.task('default', ['style', 'lint'])