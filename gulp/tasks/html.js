import fileinclude from 'gulp-file-include';

const { app } = global;
function html() {
  return app.gulp
    .src(app.path.src.html)
    .pipe(app.gulp.dest(app.path.build.html));
}

export default html;
