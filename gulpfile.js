import gulp from 'gulp';
import path from './gulp/config/path';
import reset from './gulp/tasks/reset';

global.app = {
  path,
  gulp,
};

const watcher = function () {
  gulp.watch();
};

const dev = gulp.series(reset, watcher);
