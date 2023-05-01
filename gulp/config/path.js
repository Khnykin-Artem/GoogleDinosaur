import * as nodePath from 'node:path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

const path = {
  src: {
    html: `${srcFolder}/*.html`,
    styles: `${srcFolder}/styles/style.scss`,
  },
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    styles: `${srcFolder}/styles/**/*.scss`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
};

export default path;
