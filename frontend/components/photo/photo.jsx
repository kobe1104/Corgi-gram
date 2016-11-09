import React from 'react';
import { Link, withRouter } from 'react-router';


class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.iconUrl = this.iconUrl.bind(this);
    this.state = {photo_id: 0, comment: ""}
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

  update(photo_id) {
    return e => this.setState({
      photo_id: photo_id,
      comment: e.currentTarget.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    // call createComment(this.state.comment)
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
              <form >
                <input type='text'
                  onChange={this.update.bind(this, photo)}
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
