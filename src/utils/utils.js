import { v4 as uuidv4 } from 'uuid';

function generatesId(arr = []) {
  return arr.map((element) => ({
    id: uuidv4(),
    ...element,
  }));
}

export default generatesId;
