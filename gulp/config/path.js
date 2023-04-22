import * as nodePath from 'node:path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

const path = {
  src: {
    html: `${srcFolder}/*.html`,
  },
  build: {
    html: `${buildFolder}/`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
};

export default path;
