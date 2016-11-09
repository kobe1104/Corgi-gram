import React from 'react';
import { Link, withRouter } from 'react-router';


class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.iconUrl = this.iconUrl.bind(this);
    this.state = {comment: {}}
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
    // debugger
    if (this.props.likes[photo_id]) {
      return "http://www.iconarchive.com/download/i66645/designbolts/free-valentine-heart/Heart.ico"
    } else {
      return "http://image.flaticon.com/icons/png/128/126/126471.png"
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
  }



  render() {
    // debugger
    const userId = this.props.currentUser.id;
    const photoFeed = this.props.photos.filter(
      photo => photo.author_id !== userId);
    return (
      <div className='feed-container'>
        <ul>
          {photoFeed.map((photo, i) => <li key={i}>
            <img className='feed-photo' key={photo.photo_url} src={photo.photo_url}/>
            <div className='fedd-number-likes'>{photo.likes.length} likes</div>
            <span className='feed-captions' key={photo.captions}>{photo.captions}</span>
            <ul className='feed-comments'>
              {photo.comments.map((comment, idx) => <li key={idx}>{comment.body}</li>)}
            </ul>
            <div className='feed-line'></div>
            <div className='feed-comment-like'>
              <img className='feed-like-icon'
                onClick={this.toggleLike.bind(this, photo)}
                src={this.iconUrl(photo.id)} />
              <form onSubmit={this.submitHandler}>
                <input type='text'
                  onChange={this.update(photo)}
                  placeholder='Add a comment...'/>
                <input type='submit' value='Submit'/>
              </form>
            </div>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default withRouter(Photo);
