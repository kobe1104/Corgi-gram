import { RECEIVE_LIKE, REMOVE_LIKE, RECEIVE_ALL_LIKES } from '../actions/like_actions';
import { merge } from 'lodash';

const LikeReducer =  (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      let newState = merge({}, state);
      newState[action.like.photo_id] = action.like;
      return newState;
    case REMOVE_LIKE:
      let removeState = merge({}, state);
      delete removeState[action.like.photo_id];
      return removeState;
    default:
      return state;
  }
}
export default LikeReducer;
