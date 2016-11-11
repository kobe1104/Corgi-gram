import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const default_state = Object.freeze({
  author_id: -1,
  photo_url: "",
  captions: "",
  comments: {author_id: -1, body: ""}
})

// how to put default comment in default photo?

const PhotoReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, {[action.photo.id]: action.photo});
    case RECEIVE_LIKE:
      let newPhoto = merge({}, state[action.like.photo_id]);
      newPhoto.likes.push(action.like);
      return merge({}, state, {[newPhoto.id]: newPhoto});
    case REMOVE_LIKE:
      let newState1 = merge({}, state);
      let newPhoto1 = newState1[action.like.photo_id];
      newPhoto1.likes = newPhoto1.likes.filter(like => like.photo_id !== action.like.photo_id).slice(0);
      newState1[newPhoto1.id] =  newPhoto1;
      return newState1;
    case RECEIVE_COMMENT:
      let newState2 = merge({}, state);
      let newPhoto2 = newState2[action.comment.photo_id];
      newPhoto2 = merge(newPhoto2.comments, action.comment);
      debugger
      return merge({}, state, {[newPhoto2.id]: newPhoto2});
    default:
      return state;
  }
}

export default PhotoReducer;
