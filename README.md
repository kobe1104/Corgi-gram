# Corgigram

Corgigram is an evolutionary social media design for corgis. Corgigram has
Ruby on Rails as backend and uses the latest technology of React Redux to
serve frontend interactions.

[Corgigram live][heroku]

[heroku]: https://corgigram.herokuapp.com/


## Features & Implementation

### Sharing Posts

  A post contains author information, a photo, a description of the photo and it allows all users to leave comments. It also let all users to like the post, each user can only like a post once. The Post table has
  author's id and a body, all other elements such as photo and comments are store in separate tables that refer to it. When a Post is created,
  the element components will retrieve the corresponding data and render on the post. When a post is liked, the "Like" component creates a new like record and render only the number of likes for that post.

### Photos feed



### Like Posts & Follow any users

When a Post is created, the element components will retrieve the corresponding data and render on the post. When a post is liked, the "Like" component creates a new like record and render only the number of likes for that post. A user can be followed as well as follow other users.
As soon as a user starts following another user, the "Follow" component sends out an ajax request to generate a new record in the "Follow" table which stores the user id that has been followed as well as the follwer's id.


## Future Directions for the Project

### Adding Tags to Posts

Posts will have a new attribute "Tags" which can be added by the owner of the post. Tags indicate the category of the post. Posts that own the same tags will be put under the same category and subcategory to speed up the "Search" feature.

### Search Posts by Tags

Search results render upon entering tags on the search bar. It will search on the posts that own the tags that match the key words entered in order.
