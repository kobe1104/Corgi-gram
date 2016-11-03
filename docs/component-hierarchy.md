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
    - Nickname
    - Follows/posts/followed number
  - EditForm
  - Edit Button
  - Log out Button
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

**AlbumContainer**
  - Album

**AboutContainer**
  - About

**SearchContainer**
  - Search
  - Search Bar
  - Search Feed






|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/" | "MainContainer" |
| "/user/:username" | "ProfileContainer" |
| "/user/:username/edit" | "EditForm" |
| "/user/:username/photos/:id/photo/:id | "PhotoContainer" |
| "/about | "AboutContainer" |
| "/new-photo | "NewPhoto" |
| "/search | "Search" |

<!-- is  photo container gonna be the same in both main and profile? -->
