export const fetchPhotos = (success, error) => {
  $.ajax({
    url: `api/photos`,
    success,
    error
  })
};

export const fetchPhoto = (id, success, error) => {
  $.ajax({
    url: `api/photos/${id}`,
    success,
    error
  })
}

export const createPhoto = (photo, success, error) => {
  $.ajax({
    method: "POST",
    url: `api/photos`,
    data: photo,
    success,
    error
  })
}

export const deletePhoto = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`,
    success,
    error
  })
}
