import fileinclude from 'gulp-file-include';
import gulp from 'gulp';
import path from '../config/path.js';

function html() {
  return gulp.src(path.src.html).pipe(gulp.dest(path.build.html));
}

export default html;
