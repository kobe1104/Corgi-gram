export const fetchPhotos = (success) => {
  $.ajax({
    url: `api/photos`,
    success
  });
};

export const fetchPhoto = (id, success) => {
  $.ajax({
    url: `api/photos/${id}`,
    success
  });
};

export const createPhoto = (photo, success) => {
  $.ajax({
    method: "POST",
    url: `api/photos`,
    data: {photo: photo},
    success
  });
};

export const deletePhoto = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`,
    success
  });
};

export const updatePhoto = (photo, success) => {
  $.ajax({
    method: "PATCH",
    utl: `api/photos/${photo.id}`,
    data: {photo},
    success
  });
};
