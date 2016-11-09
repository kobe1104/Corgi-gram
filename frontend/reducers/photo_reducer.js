import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
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
  

    default:
      return state;
  }
}

export default PhotoReducer;
