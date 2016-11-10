@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :author_id, :photo_id, :body
    json.author comment.user
  end
end
