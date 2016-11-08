import {
  receiveAllPhotos,
  receivePhoto,
  removePhoto,
  FETCH_PHOTOS,
  FETCH_PHOTO,
  CREATE_PHOTO,
  DELETE_PHOTO,
  UPDATE_PHOTO

} from '../actions/photo_actions';

import {
  fetchPhotos,
  fetchPhoto,
  createPhoto,
  deletePhoto,
  updatePhoto
} from '../util/photo_api_util';


window.FETCH_PHOTOS = FETCH_PHOTOS;
// debugger
const PhotoMiddleware = ({ getState, dispatch }) => next => action => {
  const receiveAllPhotosSuccess = photos => dispatch(receiveAllPhotos(photos));
  const receivePhotoSuccess = photo => dispatch(receivePhoto(photo));
  const removePhotoSuccess = photo => dispatch(removePhoto(photo));
  const getErrors = errors => dispatch(console.log(errors));
  const updateSuccess = photo => dispatch(updatePhoto(photo));

  switch (action.type) {
    case FETCH_PHOTOS:
      fetchPhotos(receiveAllPhotosSuccess);
      return next(action);
    case FETCH_PHOTO:
      fetchPhoto(action.id, receivePhotoSuccess);
      return next(action)
    case CREATE_PHOTO:
      createPhoto(action.photo, receivePhotoSuccess);
      return next(action);
    case DELETE_PHOTO:
      deletePhoto(action.id, removePhotoSuccess);
      return next(action);
    case UPDATE_PHOTO:
      updatePhoto(action.photo, updateSuccess);
    default:
      return next(action);
  }
}

export default PhotoMiddleware;
