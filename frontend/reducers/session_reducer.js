import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';

const default_state = Object.freeze({
  currentUser: null, errors: []});

const SessionReducer = (state = default_state, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, default_state, {currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, default_state, {errors});
    case LOGOUT:
      return merge({}, default_state);
    default:
      return state;
  }
};

export default SessionReducer;
