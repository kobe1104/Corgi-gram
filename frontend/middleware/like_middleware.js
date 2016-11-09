import { CREATE_LIKE, DELETE_LIKE, FETCH_ALL_LIKES, receiveLike,
  receiveAllLikes, removeLike } from '../actions/like_actions';
import { createLike, deleteLike, fetchLikes } from '../util/like_api_util';

const LikeMiddileware = ({ getState, dispatch }) => next => action => {
  const receiveAllLikesSuccess = likes => dispatch(receiveAllLikes(likes));
  const receiveLikeSuccess = like => dispatch(receiveLike(like));
  const removeLikeSuccess = like => dispatch(removeLike(like));

  switch (action.type) {
    case FETCH_ALL_LIKES:
      fetchLikes(receiveAllLikesSuccess);
      return next(action);
    case CREATE_LIKE:
      createLike(action.like, receiveLikeSuccess);
      return next(action);
    case DELETE_LIKE:
      deleteLike(action.id, removeLikeSuccess);
      return next(action);
    default:
      return next(action);
  }
}

export default LikeMiddileware;
