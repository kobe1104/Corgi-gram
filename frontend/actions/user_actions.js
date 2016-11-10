export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const FETCH_USER = "FETCH_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const fetchAllUsers = () => ({
  type: FETCH_ALL_USERS
});

export const fetchUser = (id) => ({
  type: FETCH_USER,
  id
});


export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
