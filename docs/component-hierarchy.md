## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**MainContainer**
  - Main
  - Nav bar
    - Home icon
    - Search
    - profile
  - Photo feed
  - Log out Button
**ProfileContainer**
  - Profile
    - Nickname
    - Follows/posts/followed number
  - EditForm
  - Follow
  - NewPost
  - Photo Detail

**PhotoContainer**
  - Photo
    - Author
    - Caption
    - LikesNumber
    - AddComment

**PhotoDetailContainer**

  - Photo
    - Author
    - Captions
    - Comments

**AboutContainer**
  - About





|       Path         |       Componen         |
|--------------------|------------------------|
| "/signup"          | "AuthFormContainer"    |
| "/login"           | "AuthFormContainer"    |  
| "/"                | "MainContainer"        |
| "/"                | "PhotoContainer"       |
| "/users/:username" | "ProfileContainer"     |
| "/photo-detail/:id"| "PhotoDetailContainer" |
| "/edit"            | "EditForm"             |
| "/about            | "AboutContainer"       |


<!-- is  photo container gonna be the same in both main and profile? -->
