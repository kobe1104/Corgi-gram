export const createLike = (like, success) => {
  $.ajax({
    method: "POST",
    url: `api/likes`,
    data: {like: like},
    success
  });
};

export const deleteLike = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`,
    success
  });
};

export const fetchLikes = (success) => {
  $.ajax({
    url: 'api/likes',
    success
  })
}
