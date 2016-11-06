import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import { merge } from 'lodash';

const default_state = Object.freeze({
  author_id: -1,
  photo_url: "",
  captions: "",
  type: ""
});

const PhotoReducer = (state = default_state, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, {[action.photo.id]: action.photo});
    default:
      return state;
  }
}

export default PhotoReducer;
