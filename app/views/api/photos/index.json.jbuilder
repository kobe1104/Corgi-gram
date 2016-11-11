@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :author_id, :photo_url, :captions, :type
    json.likes photo.likes, :id, :author_id, :photo_id

    json.comments do
      photo.comments.each do |comment|
        json.set! comment.id do
          json.extract! comment, :id, :author_id, :body
          json.user comment.user, :id, :username
        end
      end
    end

    json.user photo.user, :id, :username, :icon_url
  end
end
