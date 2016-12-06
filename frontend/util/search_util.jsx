export const fetchSearch = (success) => {
  $.ajax({
    method: "POST"
    url: `api/photos`,
    data{search: search},
    success
  });
};
