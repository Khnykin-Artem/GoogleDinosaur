import gulp from 'gulp';
import path from './gulp/config/path.js';
import reset from './gulp/tasks/reset.js';
import html from './gulp/tasks/html.js';

function watcher() {
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(html);

const dev = gulp.series(reset, mainTasks, watcher);
gulp.task('default', dev);
