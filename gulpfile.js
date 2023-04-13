import gulp from 'gulp';
import path from './gulp/config/path';

global.gulp = {
  path,
  gulp,
};

const watcher = function () {
  gulp.watch();
};

const dev = gulp.series();
