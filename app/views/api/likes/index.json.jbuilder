 @likes.each do |like|
   json.set! like.photo_id do
     json.extract! like, :id, :author_id, :photo_id
   end
 end
