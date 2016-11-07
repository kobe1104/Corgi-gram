json.extract! @photo, :id, :author_id, :photo_url, :captions

json.comments do
  @comment.each do |comment|
    json.set! comment.id do
      json.extract! comment, :author_id, :body
    end
  end
end
