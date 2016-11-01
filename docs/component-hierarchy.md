## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**MainContainer**
  - Main
  - Nav bar
    - Home icon
    - Search
    - profile
    - Recent activities
  - Infinite feed
  - Footer

**ProfileContainer**
  - Profile
  - Follows/posts/followed number
  - Edit button
  - Nickname
  - Log out button
  - Follow
  - NewPost

**PhotoContainer**
  - Photo
  - NewPhoto
  - Caption
  - LikesNumber
  - AddComment
  - Time
  - AddTag

**SearchContainer**
  - Search
  - Search Bar
  - Search Feed






|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "MainContainer" |
| "/user/:username" | "ProfileContainer" |
| "/user/:username/post/:id/photo/:id | "PhotoContainer" |
| "/new-photo | "NewPhoto" |
| "/search | "Search" |
