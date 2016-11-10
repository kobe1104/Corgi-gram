import {
  CREATE_FOLLOW,
  DELETE_FOLLOW,
  FETCH_ALL_FOLLOWS,
  receiveAllFollows,
  receiveFollow,
  removeFollow
} from '../actions/follow_actions';

import {
  fetchFollows,
  createFollow,
  deleteFollow
} from '../util/follow_api_util';


const FollowMiddleware = ({getState, dispatch}) => next => action => {
  const receiveAllFollowsSuccess = follows => dispatch(receiveAllFollows(follows));
  const receiveFollowSuccess = follow => dispatch(receiveFollow(follow));
  const removeFollowSuccess = follow => dispatch(removeFollow(follow));

  switch (action.type) {
    case FETCH_ALL_FOLLOWS:
      fetchFollows(receiveAllFollowsSuccess);
      return next(action);
    case CREATE_FOLLOW:
      createFollow(action.follow, receiveFollowSuccess);
      return next(action);
    case DELETE_FOLLOW:
      deleteFollow(action.id, removeFollowSuccess);
      return next(action);
    default:
      return next(action);
  }
}

export default FollowMiddleware;
