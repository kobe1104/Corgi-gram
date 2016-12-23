# Corgigram

Corgigram is an evolutionary social media design for corgis. Corgigram has
Ruby on Rails as backend and it uses the latest technology of React Redux to
serve the frontend interactions.



[Corgigram live][heroku]

[heroku]: https://corgigram.herokuapp.com/


## Features & Implementation

### Share Your Photos!

  Upload your photos and build your own profile page! Users can upload
  their photos easily with Corgigram tools and add any descriptions to
  them. The Photos are visible to all your followers! Photos are stored
  at Cloudinary an online cloud service provider. It sends out an Ajax
  request to get the urls of each photo when rendering.

  ![](http://res.cloudinary.com/corgi1989/image/upload/v1478908976/post_ebjjbl.jpg)

### Photos Feed!

  Explore the corgi world! Share other corgis' happiness or sadness by
  checking out their photos. Users are able to LIKE the photos by simply
  clicking on the corgi paw! All the Likes are stored in a Postgres database
  table. Clicking the Paw will update this table.

### Search and Follow Users!

  If you really like some of the corgis you found on search, follow them
  by clicking the FOLLOW button at their profile page! By following them,
  the user gets all the latest updates from the following corgis!!
  The search bar allows users to find other users by entering their names.
  It gets all the matched users from the database on each entered character.
  The Follow button works exactly the same as Likes which updates the Follow
  table.

  ![](http://res.cloudinary.com/corgi1989/image/upload/v1478909074/user_af4pyu.jpg)

## Future Directions for the Project

### Direct Messaging!

  Direct messaging is coming soon! All the corgis will be able to
  message each other without meeting each other! It will completely
  change the life of the corgis with lazy owners. Verbal harassment is
  forbidden.

### Adding Tags to Posts!

  Choose a TAG for your photo! Photos with tags have higher exposure in
  the feed. It also helps to make the photos more descriptive!!
