@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :nickname, :icon_url
    json.follow user.follows, :id, :follower_id, :followed_id
    json.photos user.photos, :id, :author_id, :photo_url, :captions
  end
end
