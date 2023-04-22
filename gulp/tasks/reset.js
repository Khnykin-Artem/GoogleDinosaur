import { deleteAsync } from 'del';

const { app } = global;
function reset() {
  return deleteAsync(app.path.clean);
}

export default reset;
