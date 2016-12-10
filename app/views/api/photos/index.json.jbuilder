@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :author_id, :photo_url, :captions, :type
    json.likes photo.likes, :id, :author_id, :photo_id

    json.user photo.user, :id, :username, :icon_url

    json.comments do
      photo.comments.each do |comment|
        json.set! comment.id do
          json.extract! comment, :id, :author_id, :body
          json.user comment.user, :id, :username
        end
      end
    end
    json.oldness time_ago_in_words(photo.created_at)
  end
end
