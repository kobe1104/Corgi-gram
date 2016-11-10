import {
  FETCH_ALL_USERS,
  FETCH_USER,
  receiveAllUsers,
  recieveUser
} from '../actions/user_actions';

import {
  fetchUsers,
  fetchUser
} from '../util/user_api_util';


const UserMiddleware = ({getState, dispatch}) => next => action => {
  const receiveUsersSuccess = users => dispatch(receiveAllUsers(users));

  switch (action.type) {
    case FETCH_ALL_USERS:
      // debugger
      fetchUsers(receiveUsersSuccess);
      return next(action);
    default:
      return next(action);
  }
}

export default UserMiddleware;
