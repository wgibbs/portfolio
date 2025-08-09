const { series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat'),
  gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass')(require('sass'));

const stylesSourcePath = ['./src/scss/**/*.scss'];
const stylesExportPath = './css/';
const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

function buildStyles() {
  gulp.src(stylesSourcePath)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(stylesExportPath))
    .pipe(browserSync.stream());
};

function watchTask() {
  watch(stylesSourcePath).on('change', buildStyles);
};

function serve() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  
  buildStyles();
  watchTask();
}

exports.default = function() {
  serve();
};