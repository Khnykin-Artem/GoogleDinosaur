import * as nodePath from 'node:path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

const path = {
  src: {
    html: `${srcFolder}/*.html`,
    styles: `${srcFolder}/styles/style.scss`,
    scripts: `${srcFolder}/scripts/main.js`,
  },
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    styles: `${srcFolder}/styles/**/*.scss`,
    scripts: `${srcFolder}/scripts/**/*.js`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
};

export default path;
