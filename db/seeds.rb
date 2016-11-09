# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'henry1', password: 'password', email: 'abc111@gmail', nickname: "just a lonely corgi");
User.create(username: 'Sir. Corgilim', password: 'password', email: 'abc111@gmail', nickname: 'Guest', icon_url: "https://s-media-cache-ak0.pinimg.com/236x/e0/c8/d6/e0c8d67a12b3145f68a30605708f0991.jpg");


Photo.create(author_id: 1, photo_url: "http://i.imgur.com/xTcE7tU.gif", captions: "Autumn Corgi");
Photo.create(author_id: 1, photo_url: "http://i.imgur.com/DqZsTYl.jpg", captions: "Spring Corgi");
Photo.create(author_id: 1, photo_url: "http://images.memes.com/meme/673847", captions: "Summer Corgi");
Photo.create(author_id: 1, photo_url: "http://i.imgur.com/RtzLYg7.gif", captions: "Winter Corgi");

Photo.create(author_id: 6, photo_url: "http://i.imgur.com/tWJb7xR.jpg", captions: "wink wink");
Photo.create(author_id: 6, photo_url: "http://i.imgur.com/StZopHZ.jpg", captions: "wink wink");
Photo.create(author_id: 6, photo_url: "https://s-media-cache-ak0.pinimg.com/236x/5e/0c/2a/5e0c2a140d421f0c4fa5f6194e92d97b.jpg", captions: "wink wink");
Photo.create(author_id: 6, photo_url: "http://66.media.tumblr.com/85c2333d5cc16a5974824f57b9fef9f9/tumblr_mhd5de2Akh1s0ath6o1_1280.jpg", captions: "wink wink");
Photo.create(author_id: 6, photo_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPhmHUu9Hb1fTb9AW1RZdezTIo6O6DVzXduBVXP5Q5YiYrpeupmA", captions: "wink wink");

Comment.create(author_id: 6, photo_id: 10, body: "I love autumn")
Comment.create(author_id: 6, photo_id: 11, body: "I love spring")
Comment.create(author_id: 6, photo_id: 11, body: "I love spring so much")
Comment.create(author_id: 6, photo_id: 11, body: "ok I really love spring")
Comment.create(author_id: 6, photo_id: 12, body: "I love summer")
Comment.create(author_id: 6, photo_id: 13, body: "I love winter")

Like.create(author_id: 2, photo_id: 10);
Like.create(author_id: 3, photo_id: 10);
Like.create(author_id: 4, photo_id: 10);
Like.create(author_id: 5, photo_id: 10);
