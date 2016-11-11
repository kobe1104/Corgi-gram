// need apis
//actions

import { logIn, signUp, logOut } from '../util/session_api_util';
import { LOGIN, LOGOUT, SIGNUP,
   receiveCurrentUser, receiveErrors, removeCurrentUser } from '../actions/session_actions';
import { hashHistory } from 'react-router';


const SessionMiddleware = (store) => next => action => {
  const successCallback = currentUser => store.dispatch(receiveCurrentUser(currentUser));
  const errorCallback = errors => store.dispatch(receiveErrors(errors.responseJSON));
  const logoutSuccess = () => {
    store.dispatch(removeCurrentUser());
    hashHistory.push('/login');
  };

  switch (action.type) {
    case LOGIN:
      logIn(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logOut(logoutSuccess);
      return next(action);
    case SIGNUP:
      signUp(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action)
  }
};

export default SessionMiddleware;
