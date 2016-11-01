// need apis
//actions

import { logIn, signUp, logOut } from '../util/session_api_util';
import { LOGIN, LOGOUT, SIGNUP,
   receiveCurrentUser, receiveErrors } from '../actions/session_actions';

const SessionMiddleware = (store) => next => action => {
  const successCallback = currentUser => store.dispatch(receiveCurrentUser(currentUser));
  const errorCallback = errors => store.dispatch(receiveErrors(errors));

  switch (action.type) {
    case LOGIN:
      logIn(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logOut(() => {});
      return next(action);
    case SIGNUP:
      signUp(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action)
  }
};

export default SessionMiddleware;
