# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'henry1', password: 'password', email: 'abc111@gmail');

Photo.create(author_id: 1, photo_url: "http://i.imgur.com/xTcE7tU.gif", captions: "Autumn Corgi");
Photo.create(author_id: 1, photo_url: "http://i.imgur.com/DqZsTYl.jpg", captions: "Spring Corgi");
Photo.create(author_id: 1, photo_url: "http://images.memes.com/meme/673847", captions: "Summer Corgi");
Photo.create(author_id: 1, photo_url: "http://i.imgur.com/RtzLYg7.gif", captions: "Winter Corgi");
