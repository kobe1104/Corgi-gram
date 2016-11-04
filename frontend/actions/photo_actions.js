export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const FETCH_PHOTOS = "FETCH_PHOTOS";
export const FETCH_PHOTO = "FETCH_PHOTO";
export const CREATE_PHOTO = "CREATE_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";


export const receiveAllPhotos = (photos) => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const fetchPhotos = () => ({
  type: FETCH_PHOTOS
});

export const fetchPhoto = (id) => ({
  type: FETCH_PHOTO,
  id
});

export const createPhoto = (photo) => ({
  type: CREATE_PHOTO,
  photo
});

export const deletePhoto = (id) => ({
  type: DELETE_PHOTO,
  id
});

export const removePhoto = (photo) => ({
  type: REMOVE_PHOTO,
  photo
});
