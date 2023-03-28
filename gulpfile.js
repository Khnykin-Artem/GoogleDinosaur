import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import { deleteAsync } from 'del';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

const sass = gulpSass(dartSass);

const paths = {
  styles: {
    src: './src/styles/**/*.scss',
    dest: './dist/css/',
  },
  scripts: {
    src: './src/scripts/*.js',
    dest: './dist/js/',
  },
};

/**
 * @return {Promise}
 */
async function clean() {
  await deleteAsync(['./dist']);
}

/**
 * @return {void}
 */
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(
      rename({
        basename: 'main',
        suffix: '.min',
      })
    )
    .pipe(gulp.dest(paths.styles.dest));
}

/**
 * @return {void}
 */
function scripts() {
  return gulp
    .src(paths.scripts.src, {
      sourcemaps: true,
    })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

/**
 * * Watching scripts and styles changes
 * @return {void}
 */
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
}

const build = gulp.series(clean, gulp.parallel(scripts, styles), watch);

export default build;
