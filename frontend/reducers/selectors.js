import {values} from 'lodash';

export const commentsSelector = (state, id) => {
  if (state.photo[id]) {
    return values(state.photo[id].comments) || [];
  } else {
    return [];
  }
}

export const photosByUser = (state, id) => {

}

// TODO
