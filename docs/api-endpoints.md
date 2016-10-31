# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/username`
- `PATCH /api/username`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Posts

- `GET /api/posts/:id`
- `GET /api/posts`
- `POST /api/posts`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Photos

- `GET /api/photos/:id`
- `GET /api/posts`
- `POST /api/posts`
- `DELETE /api/posts/:id`

### Likes

- `GET /api/posts/:id/likes`
- `POST /api/posts/:id/likes/:id`
- `DELETE /api/posts/:id/likes/:id`

### Follows

- `GET /api/username/:id/follows`
- `POST /api/username/:id/follows/:id`
- `DELETE /api/username/:id/follows/:id`


### Tags

- `GET /api/posts/:id/tags`
- `POST /api/posts/:id/tags/:id`
- `DELETE /api/posts/:id/tags/:id`
