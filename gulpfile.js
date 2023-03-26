import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import { deleteAsync } from 'del';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';

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

async function clean() {
  await deleteAsync(['./dist']);
}

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

function watch() {
  gulp.watch(paths.styles.src, styles);
}

export { clean, styles, watch };
