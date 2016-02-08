var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var connect = require('gulp-connect');
var open = require('gulp-open');
var webpack = require('webpack-stream');
var PORT = 3000;

gulp.task('connect', function () {
  connect.server({
    root: ['./dist'],
    port: PORT,
    livereload: true
  });
});

gulp.task('scripts', function () {
  return gulp.src('./static/app.ts')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
    ;
});

gulp.task('htmls', function () {
  return gulp.src('./static/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
    ;
});

// Clean
gulp.task('clean', function () {
    return rimraf('./dist');
});

gulp.task('copy', function () {
  return gulp.src(['./static/**/**.*', '!./static/**/**.ts'], {
    base: './static'
  })
    .pipe(gulp.dest('./dist'))
    ;
});

gulp.task('copy-libs', function () {
  return gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.js',
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/jquery/dist/jquery.js',
    './node_modules/font-awesome/css/font-awesome.css'])
    .pipe(gulp.dest('./dist/libs'))
    ;
});

gulp.task('fonts', function () {
  return gulp.src(['./node_modules/font-awesome/fonts/fontawesome-webfont.*'])
    .pipe(gulp.dest('./dist/fonts/'))
    ;
});

gulp.task('open', function () {
  return gulp.src('./dist/index.html')
    .pipe(open({ app: 'chrome', uri: 'http://localhost:' + PORT }))
    ;
});

gulp.task('watch', function () {
  gulp.watch(['!./static/**/**.ts', './static/**/**.*'], ['copy']);
  gulp.watch('./static/**/**.ts', ['scripts']);
  gulp.watch('./static/*.html', ['htmls']);
});

gulp.task('dev', ['scripts', 'htmls', 'copy', 'copy-libs', 'fonts', 'connect', 'watch', 'open']);

gulp.task('default', ['scripts', 'htmls', 'copy', 'copy-libs', 'fonts']);
