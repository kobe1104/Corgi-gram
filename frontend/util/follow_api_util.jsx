export const createFollow = (follow, success) => {
  $.ajax({
    method: "POST",
    url: `api/follows`,
    data: {follow: follow},
    success
  });
};

export const deleteFollow = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`,
    success
  });
};

export const fetchFollows = (success) => {
  $.ajax({
    url: 'api/follows',
    success
  })
}
