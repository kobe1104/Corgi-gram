json.extract! user, :id, :username, :email, :icon_url, :nickname

json.follows do
  json.array! user.follows, :id, :follower_id, :followed_id
end
