export const fetchUsers = (success) => {

  $.ajax({
    url: `api/users`,
    success
  });
};

export const fetchUser = (id, success) => {
  $.ajax({
    url: `api/users/${id}`,
    success
  });
};
