@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :author_id, :photo_url, :captions, :type
    json.likes photo.likes, :id, :author_id, :photo_id
    json.comments photo.comments, :id, :author_id, :body, :photo_id
  end
end
