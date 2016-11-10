export const FETCH_ALL_FOLLOWS  = "FETCH_ALL_FOLLOWS ";
export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const DELETE_FOLLOW = "DELETE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const fetchAllFollows = () => ({
  type: FETCH_ALL_FOLLOWS
});

export const receiveAllFollows = follows => ({
  type: RECEIVE_ALL_FOLLOWS,
  follows
})

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const createFollow = (follow) => ({
  type: CREATE_FOLLOW,
  follow
});

export const removeFollow = (follow) => ({
  type: REMOVE_FOLLOW,
  follow
});

export const deleteFollow = (id) => ({
  type: DELETE_FOLLOW,
  id
});
