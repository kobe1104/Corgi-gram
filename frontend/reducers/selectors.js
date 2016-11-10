import {values} from 'lodash';

export const commentsSelector = (state, id) => {
  if (state.photo[id]) {
    return values(state.photo[id].comments) || [];
  } else {
    return [];
  }
};

export const photosByCurrentUser = (state) => {
  if (state.session.currentUser.id) {
    const author_id = state.session.currentUser.id;
    const photos = values(state.photo) || [];
    const userPhotos = photos.filter(photo => photo.author_id == author_id);
    return(userPhotos);
  }
};

export const photosNotByUser = state => {
  const currentUserId = state.session.currentUser.id;
  const photos = values(state.photo) || {};
  const notUserPhotos = photos.filter(photo =>
  photo.author_id !== currentUserId);
  return notUserPhotos;
};

export const photoByUser = (state, {params}) => {
  
}
