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

### Comments

- `GET /api/comments`
- `POST /api/comments`

### Likes

- `POST /api/posts/:id/likes/:id`
- `DELETE /api/posts/:id/likes/:id`

### Follows

- `POST /api/username/:id/follows/:id`
- `DELETE /api/username/:id/follows/:id`
