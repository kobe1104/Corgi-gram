```js
{
  follows: {
    6: {id: 6, follower_id: 9, follower_id: 1},
    7: {id: 7, follower_id: 9, follower_id: 2}
  },
  likes: {
    10: {id: 200, author_id: 1, photo_id: 10},
    12: {id: 201, author_id: 1, photo_id: 12}
  },
  session{
    currentUser: {
      id: 1,
      username: "corgibun150",
      email: "bonelover12@gmail.com",
      nickname: "yongmaswag",
      followers: [
        {id: 1, followed_id: 1, follower_id: 6},
        {id: 2, followed_id: 1, follower_id: 9}
      ]
    },
    errors: ["Invalid Credentials"]
  },
    icon_url: "pic03.jpg"
  },
  photos: {
    1: {
      id: 1,
      author_id: 1,
      photo_url: 'http://abc.png',
      caption: "life is a marathon not a sprint",
      comments: {
        1: {id: 1, author_id: 29, body: "nice saying"},
        2: {id: 2, author_id: 7, body: "great shot!"}
      },
      likes: [
        1: {id: 1, author_id: 29, photo_id: 11},
        2: {id: 2, author_id: 7, photo_id: 17}
      ]
    }  
  },
  users: {
    2: {
      id: 1,
      username: "corgi123",
      nickname: "corgigramfan",
      icon_url: "abc.com.jpg",
      photos: [
        {id: 10, author_id: 1, captions: "great shot!", photo_url: "cba.com.jpg"},
        {id: 11, author_id: 1, captions: "looks fun!", photo_url: "ggg.com.jpg"}
      ],
      follow: [
        {id: 1, followed_id: 1, follower_id: 7},
        {id: 2, followed_id: 1, follower_id: 9}
      ]
    },
  }
}
```
