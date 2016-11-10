import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW,
  RECEIVE_ALL_FOLLOWS,
  CREATE_FOLLOW
} from '../actions/follow_actions';

import { merge } from 'lodash';

const FollowReducer =  (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:
      return action.follows;
    default:
      return state;
  }
}

export default FollowReducer;
