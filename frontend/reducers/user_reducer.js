import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { merge } from 'lodash';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, action.users);
    case RECEIVE_FOLLOW:
      let newUser = merge({}, state[action.follow.followed_id]);
      newUser.follows.push(action.follow);
      return merge({}, state, {[newUser.id]: newUser});
    case REMOVE_FOLLOW:
      let newState = merge({}, state);
      let newUser1 = newState[action.follow.followed_id];
      newUser1.follows = newUser1.follows.filter(follow => follow.followed_id !== newUser1.id).slice(0);
      newState[newUser1.id] = newUser1;
      return newState;
    default:
      return state;
  }
}

export default UserReducer;
