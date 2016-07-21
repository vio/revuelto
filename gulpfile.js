var gulp = require('gulp');
var config = require('./config');
var _ = require('lodash');

var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');

var normalize = require('stylus-normalize');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

gulp.task('html', function () {
  gulp.src('index.jade')
    .pipe(jade(config.jade))
    .pipe(gulp.dest(config.output));
});

gulp.task('css', function () {
  var options = _.merge(config.options, {
    use: [normalize()]
  });
  var transforms = [
    autoprefixer(config.autoprefixer),
    mqpacker(config.mqpacker),
    csswring(config.csswring)
  ];

  gulp.src('assets/css/main.styl', {base: '.'})
    .pipe(stylus(options))
    .pipe(postcss(transforms))
    .pipe(gulp.dest(config.output));
});

gulp.task('img', function () {
  gulp.src('assets/img/**.*', {base: '.'})
    .pipe(gulp.dest(config.output));
});

gulp.task('watch', ['build'], function () {
  gulp.watch('*.jade', ['html']);
  gulp.watch('assets/css/**/*.styl', ['css']);
  gulp.watch('assets/img/**/*.*', ['img']);
});

gulp.task('build', ['html', 'css', 'img']);
gulp.task('dev', ['watch']);
