import {
  FETCH_COMMENTS,
  CREATE_COMMENT,
  DELETE_COMMENT,
  receiveAllComments,
  receiveComment,
  removeComment
} from '../actions/comment_actions';

import {
  fetchComments,
  fetchComment,
  createComment,
  deleteComment
} from '../util/comment_api_util';

const CommentMiddleware = ({ getState, dispatch }) => next => action => {
  const receiveCommentsSuccess = comments => dispatch(receiveAllComments(comments));
  const receiveCommentSuccess = comment => dispatch(receiveComment(comment));
  const removeCommentSuccess = comment => dispatch(removeComment(comment));

  switch (action.type) {
    case FETCH_COMMENTS:
      fetchComments(action.comments, receiveCommentsSuccess);
      return next(action);
    case CREATE_COMMENT:
      createComment(action.comment, receiveCommentSuccess);
      return next(action);
    case DELETE_COMMENT:
      deleteComment(comment, removeCommentSuccess);
      return next(action);
    default:
      return next(action);
  }

}


export default CommentMiddleware;
