## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**MainContainer**
  - Nav bar
    - Home icon
    - Search
    - profile
    - Recent activities

  - Infinite feed

  - Footer

**ProfileContainer**
  - Follows/posts/followed number
  - Edit button
  - Nickname
  - Log out button
  - Follow
  - NewPost

**PostContainer**
  - Body
  - Like
  - LikesNumber
  - AddComment
  - Time
  - AddTag

**PhotoContainer**
  - Photo

**CommentContainer**
  - Body

**Search**
  - Search





|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "MainContainer" |
| "/user/:username" | "ProfileContainer" |
| "/user/:username/post/:id | "PostContainer" |
| "/user/:username/post/:id/comments | "CommentContainer" |
| "/user/:username/post/:id/photo/:id | "PhotoContainer" |
| "/new-post | "NewPost" |
| "/search | "Search" |
