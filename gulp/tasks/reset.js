import { deleteAsync } from 'del';

const reset = function () {
  return deleteAsync(global.app.path.clean);
};

export default reset;
