@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :author_id, :photo_url, :captions, :type
  end
end
