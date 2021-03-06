import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const default_state = Object.freeze({
  author_id: -1,
  photo_id: -1,
  body: ""
});

const CommentReducer = (state = default_state, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, action.comments);
    case RECEIVE_COMMENT:
      debugger
      return merge({}, state, {[action.comment.id]: action.comment});
    default:
      return state;
  }
}

export default CommentReducer;
