import fileInclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';

function html() {
  return global.app.gulp.src(global.app.path.src.html).pipe(fileInclude()).pipe(global.app.gulp.dest(global.app.path.build.html));
}

export default html;
