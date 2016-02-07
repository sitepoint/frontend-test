var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var connect = require('gulp-connect');
var open = require('gulp-open');
var webpack = require('webpack-stream');
var PORT = 3000;

gulp.task('connect', function() {
  connect.server({
    root: ['./dist'],
    port: PORT,
    livereload: true
  });
});

gulp.task('scripts', function() {
  return gulp.src('./static/app.ts')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
    ;
});

gulp.task('copy', function() {
  return gulp.src(['./static/**/**.*', '!./static/**/**.ts'], {
    base: './static'
  })
  .pipe(gulp.dest('./dist'))
  ;
});

gulp.task('open', function() {
  return gulp.src('./dist/index.html')
  .pipe(open({app: 'chrome', uri: 'http://localhost:' + PORT}));
});
 
gulp.task('clean', function (cb) {
  return rimraf('./dist', cb);
});

gulp.task('watch', function () {
  gulp.watch(['!./static/**/**.ts', './static/**/**.*'], ['copy']);
  gulp.watch('./static/**/**.ts', ['scripts']);
});

gulp.task('dev', ['scripts', 'copy', 'connect', 'open', 'watch']);

gulp.task('default', ['scripts', 'copy']);
