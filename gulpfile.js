import gulp from 'gulp';
import path from './gulp/config/path.js';
import plugins from './gulp/config/plugins.js';
import reset from './gulp/tasks/reset.js';
import html from './gulp/tasks/html.js';

global.app = {
  gulp,
  path,
  plugins,
};

function watcher() {
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(html);

const dev = gulp.series(reset, mainTasks, watcher);
gulp.task('default', dev);
