json.extract! @photo, :id, :author_id, :photo_url, :captions

json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :author_id, :body
      json.user comment.user, :id, :username
    end
  end
end


json.likes do
  json.array! @photo.likes, :id, :author_id, :photo_id
end
