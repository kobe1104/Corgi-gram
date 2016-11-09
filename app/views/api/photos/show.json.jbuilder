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

# likes: [1: {id:1}, 2:{id:2}]


json.likes do
  json.array! @photo.likes, :id, :author_id, :photo_id
end
