import { deleteAsync } from 'del';
import path from '../config/path.js';

function reset() {
  return deleteAsync(path.clean);
}

export default reset;
