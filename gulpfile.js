import gulp from 'gulp';
import path from './gulp/config/path.js';
import plugins from './gulp/config/plugins.js';
import reset from './gulp/tasks/reset.js';
import html from './gulp/tasks/html.js';
import server from './gulp/tasks/server.js';
import styles from './gulp/tasks/styles.js';
import scripts from './gulp/tasks/scripts.js';

global.app = {
  gulp,
  path,
  plugins,
};

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.styles, styles);
  gulp.watch(path.watch.scripts, scripts);
}

const mainTasks = gulp.parallel(html, styles, scripts);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
gulp.task('default', dev);
