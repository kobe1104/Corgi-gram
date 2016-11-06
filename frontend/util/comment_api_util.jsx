export const fetchComments = (success) => {
  $.ajax({
    url: `api/comments`,
    success
  })
};

export const fetchComment = (id, success) => {
  $.ajax({
    url: `api/comments/${id}`,
    success
  })
}

export const createComment = (comment, success) => {
  $.ajax({
    method: "POST",
    url: `api/comments`,
    data: comment,
    success
  })
}

export const deleteComment = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`,
    success
  })
}
