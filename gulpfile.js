/**
 * Created by fajerus on 12.11.2016.
 */

var gulp         = require('gulp'),
    gulpHaml     = require('gulp-haml'),
    gulpStylus   = require('gulp-stylus'),
    browserSync  = require('browser-sync'),
    nib          = require('nib'),
    cleanCss     = require('gulp-clean-css'),
    cssLint      = require('gulp-csslint');


var reload = browserSync.reload;


gulp.task('serve', ['stylus'], function () {
  browserSync.init({
    server: "./"
  });

  gulp.watch("./sources/styl/*.styl", function () {
    gulp.run('stylus');
  });

  gulp.watch("./sources/haml/*.haml", function () {
    gulp.run('haml');
  });
});

gulp.task('stylus', function () {
  return gulp.src("./sources/styl/*.styl")
    .pipe(gulpStylus({
      compress: false,
      use: nib()
    }))
    .pipe(gulp.dest("./assets/styles"))
    // .pipe(cssLint())
    // .pipe(cssLint('csslintrc.json'))
    // .pipe(cssLint.formatter())
    .pipe(reload({stream: true}));
});

gulp.task('haml', function () {
  gulp.src('./sources/haml/*.haml')
    .pipe(gulpHaml())
    .pipe(gulp.dest('./'))
    .pipe(reload({stream: true}));
});


gulp.task('minify-css', function () {
  return gulp.src('./assets/styles/*.css')
    .pipe(cleanCss({debug: true}, function (details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('./assets/styles'));
});

gulp.task('default', ['serve']);