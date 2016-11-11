import React from 'react';
import { Link, withRouter } from 'react-router';


class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.iconUrl = this.iconUrl.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {comment: {body: ""}}
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
      return "http://res.cloudinary.com/corgi1989/image/upload/c_scale,w_32/v1478849673/paw-print-outline_318-35039_oqu3oa.jpg"
    } else {
      return "http://res.cloudinary.com/corgi1989/image/upload/c_scale,w_23/v1478879823/paw_njtxeg.jpg"
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



  render() {
    // debugger

    return (

      <div className='feed-container'>
        <ul className='feed-box'>
          {this.props.photos.map((photo, i) => <li key={i}>
            <div className='feed-author'>
              <img onClick={() => this.props.router.push(`/users/${photo.user.id}`)} src={photo.user.icon_url}/>
              <div onClick={() => this.props.router.push(`/users/${photo.user.id}`)}>{photo.user.username}</div>
            </div>
            <img className='feed-photo' key={photo.photo_url} src={photo.photo_url}/>
            <div className='fedd-number-likes'>{photo.likes.length} likes</div>
            <span className='feed-captions' key={photo.captions}>{photo.captions}</span>
            <ul className='feed-comments'>
              {this.feedComments(photo)}
            </ul>
            <div className='feed-line'></div>
            <div className='feed-comment-like'>
              <img className='feed-like-icon'
                title='like'
                onClick={this.toggleLike.bind(this, photo)}
                src={this.iconUrl(photo.id)} />
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
  }
}

export default withRouter(Photo);
