json.extract! @photo, :id, :author_id, :photo_url, :captions
# json.extract! @user, :username, :nickname
# how to use comment partial  to get user info?

json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :author_id, :body
    end
  end
end
