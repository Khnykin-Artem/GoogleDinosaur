import gulp from 'gulp';
import path from './gulp/config/path.js';
import plugins from './gulp/config/plugins.js';
import reset from './gulp/tasks/reset.js';
import html from './gulp/tasks/html.js';
import server from './gulp/tasks/server.js';
import styles from './gulp/tasks/styles.js';
import scripts from './gulp/tasks/scripts.js';
import images from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';

global.app = {
  gulp,
  path,
  plugins,
};

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.styles, styles);
  gulp.watch(path.watch.scripts, scripts);
  gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(html, styles, scripts, images)
);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
gulp.task('default', dev);
