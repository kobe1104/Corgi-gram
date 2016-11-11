import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW,
  RECEIVE_ALL_FOLLOWS,
} from '../actions/follow_actions';

import { merge } from 'lodash';

const FollowReducer =  (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:
      return action.follows;
    case RECEIVE_FOLLOW:
      return merge({}, state, {[action.follow.id]: action.follow});
    case REMOVE_FOLLOW:
      let newState = merge({}, state)
      delete newState[action.follow.id];
      return newState;
    default:
      return state;
  }
}

export default FollowReducer;
