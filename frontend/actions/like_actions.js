export const CREATE_LIKE = "CREATE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";
export const FETCH_ALL_LIKES = "FETCH_ALL_LIKES";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";

export const fetchAllLikes = () => ({
  type: FETCH_ALL_LIKES
});

export const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
})

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const createLike = (like) => ({
  type: CREATE_LIKE,
  like
});

export const removeLike = (like) => ({
  type: REMOVE_LIKE,
  like
});

export const deleteLike = (id) => ({
  type: DELETE_LIKE,
  id
});
