const { series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify'); // New dependency for minifying JS

// Source and destination paths
const stylesSourcePath = ['./src/scss/**/*.scss'];
const scriptsSourcePath = ['./src/js/**/*.js'];
const stylesExportPath = './css/';
const scriptsExportPath = './js/';

// Sass options for compilation
const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

// Task to compile, minify, and concatenate SCSS files
function buildStyles() {
  return gulp.src(stylesSourcePath)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest(stylesExportPath))
    .pipe(browserSync.stream());
};

// New task to concatenate, minify, and write sourcemaps for JS files
function buildScripts() {
  return gulp.src(scriptsSourcePath)
    .pipe(concat('scripts.min.js')) // Concatenate all JS files into one
    .pipe(uglify()) // Minify the concatenated JS file
    .pipe(gulp.dest(scriptsExportPath))
    .pipe(browserSync.stream()); // Reload the browser after changes
};

// Task to watch for file changes and run corresponding tasks
function watchTask() {
  // Watch for changes in SCSS and run buildStyles
  watch(stylesSourcePath, buildStyles);
  // Watch for changes in JS and run buildScripts
  watch(scriptsSourcePath, buildScripts);
};

// Main task to initialize the development server and start watching files
function serve() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  // Run the build tasks once before starting the watcher
  buildStyles();
  buildScripts();

  // Start the watch task
  watchTask();
}

// Export the default task
exports.default = function() {
  serve();
};