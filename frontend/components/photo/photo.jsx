import React from 'react';
import { Link, withRouter } from 'react-router';


class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.iconUrl = this.iconUrl.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.state = {comment: {body: ""}}
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) {
      this.props.router.push('/login');
    }
  }

  componentWillMount() {
    this.props.fetchPhotos();
    this.props.fetchComments();
    this.props.fetchAllLikes();
  }


  toggleLike(photo) {
    if (this.props.likes[photo.id]) {
      this.props.deleteLike(this.props.likes[photo.id].id);
    } else {
      const like = {author_id: this.props.currentUser.id, photo_id: photo.id};
      this.props.createLike(like);
      // fetch photo likes

    }
  }


  iconUrl(photo_id) {
    if (this.props.likes[photo_id]) {
      return "https://res.cloudinary.com/corgi1989/image/upload/c_scale,w_48/v1480621165/paw_png_nxddiu.png"
    } else {
      return "https://res.cloudinary.com/corgi1989/image/upload/c_scale,w_81/v1480909580/imageedit_3_6330252155_fdlgzy.png"
    }
  }

  update(photo) {
    return e => this.setState({
      comment: {
        author_id: this.props.currentUser.id,
        photo_id: photo.id,
        body: e.currentTarget.value
      }
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.createComment(this.state.comment);
    this.setState({comment: {body: ""}});
  }

  feedComments(photo) {
    if (photo.comments) {
      const keyArray = Object.keys(photo.comments);
      const comments = keyArray.map(id => photo.comments[id]);
      return comments.map((comment, i) => <li key={i}>{comment.user.username}: {comment.body}</li>);
    }
  }

  shuffle(arr) {
    for (let i = arr.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    }
    return arr;
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className='feed-container' onClick={() => this.props.clearSearch()}>

          <ul className='feed-box'>
            {this.props.photos.map((photo, i) => <li key={i}>
            <div className='feed-author'>
              <div className="feed-author-2">
                <img onClick={() => this.props.router.push(`/users/${photo.user.id}`)} src={photo.user.icon_url}/>
                <div className="feed-username" onClick={() => this.props.router.push(`/users/${photo.user.id}`)}>{photo.user.username}</div>
              </div>
              <div className='feed-oldness'>{photo.oldness.match(/\d+/) + photo.oldness.substr(photo.oldness.indexOf(" ") + 1)[0]}</div>
            </div>
            <img className='feed-photo' key={photo.photo_url} src={photo.photo_url}/>
            <div className='feed-number-likes'>{photo.likes.length} likes</div>
            <span className='feed-captions' key={photo.captions}>{photo.captions}</span>
            <ul className='feed-comments'>
              {this.feedComments(photo)}
            </ul>
            <div className='feed-line'></div>
            <div className='feed-comment-like'>
              <div className="wrapper-like">
                <img className='feed-like-icon'
                  title='like'
                  onClick={this.toggleLike.bind(this, photo)}
                  src={this.iconUrl(photo.id)} />
                <div className="wrapper-like-text">Like</div>
              </div>
              <form className='feed-comment-form' onSubmit={this.submitHandler}>
                <input type='text'
                  onChange={this.update(photo)}
                  placeholder='Add a comment...'
                  value={this.state.comment.body}
                  />
                <input className='feed-comment-submit' type='submit' value='Submit'/>
              </form>
            </div>
          </li>)}
        </ul>
      </div>
      );
    } else {
      return (<div></div>);
    }

  }
}

export default withRouter(Photo);
