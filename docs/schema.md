# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
nickname        | string    |
icon_url        | string    |

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
photo_url   | string    | not null
captions    | string    |
type        | string    | not null
<!-- type is either profile or post -->

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
photo_id    | integer   | not null, foreign key (references posts), indexed
body        | string    | not null


## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
photo_id    | integer   | not null, foreign key (references posts), indexed
<!-- how to add unique [post_id, author_id] -->

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followed_id | integer   | not null, foreign key (references users), indexed
