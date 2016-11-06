export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENT = "FETCH_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


export const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});


export const fetchComments = () => ({
  type: FETCH_COMMENTS
});

export const fetchComment = (id) => ({
  type: FETCH_COMMENT,
  id
});

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});
