import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import newer from 'gulp-newer';

const plugins = {
  replace,
  plumber,
  notify,
  browserSync,
  newer,
};

export default plugins;
