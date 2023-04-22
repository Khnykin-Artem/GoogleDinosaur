import gulp from 'gulp';
import path from './gulp/config/path';
import reset from './gulp/tasks/reset';
import html from './gulp/tasks/html';

global.app = {
  path,
  gulp,
};

function watcher() {
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(html);

const dev = gulp.series(reset, mainTasks, watcher);
gulp.task('default', dev);
