import {values} from 'lodash';

export const commentsSelector = (state, id) => {
  if (state.photo[id]) {
    return values(state.photo[id].comments) || [];
  } else {
    return [];
  }
};

export const photosByCurrentUser = (state) => {
  if (state.session.currentUser) {
    const author_id = state.session.currentUser.id;
    const photos = values(state.photo) || [];
    const userPhotos = photos.filter(photo => photo.author_id == author_id);
    return(userPhotos);
  }
};

export const allPhotos = state => {

  if (state.session.currentUser) {
    const currentUserId = state.session.currentUser.id;
    const photos = values(state.photo) || {};
    return photos;
  }
};

export const followingNumber = (state, params) => {
  const author_id = Number(params.id);
  const following = values(state.follows).filter(follow => follow.follower_id === author_id);
  return following.length;
}

export const currentUserFollowingNumber = (state) => {
  if (state.session.currentUser) {
    const author_id = state.session.currentUser.id;
    const following = values(state.follows).filter(follow => follow.follower_id === author_id);
    return following.length;
  }
}
