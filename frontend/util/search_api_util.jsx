export const fetchSearch = (search, success) => {
  $.ajax({
    url: `api/search`,
    data: {search: search},
    success
  });
};
