# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/username`
- `PATCH /api/username`
- `GET /api/username`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Photos

- `GET /api/photos/:id`
- `GET /api/photos`
- `POST /api/photos`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

<!-- ### Comments

- `GET /api/comments`
- `GET /api/comments/:id`
- `POST /api/comments`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id` -->


### Likes

- `POST /api/posts/:id/likes/:id`
- `DELETE /api/posts/:id/likes/:id`

### Follows

- `POST /api/username/:id/follows/:id`
- `DELETE /api/username/:id/follows/:id`


### Tags

- `GET /api/posts/:id/tags`
- `POST /api/posts/:id/tags/:id`
- `DELETE /api/posts/:id/tags/:id`
