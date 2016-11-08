import React from 'react';
import { Link, withRouter } from 'react-router';


class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPhotos();
    this.props.fetchComments();
  }

  render() {
    const userId = this.props.currentUser.id;
    const photoFeed = this.props.photos.filter(
      photo => photo.author_id !== userId);
    return (
      <div className='feed-container'>
        <ul>
          {photoFeed.map((photo, i) => <li key={i}>
            <img className='feed-photo' key={photo.photo_url} src={photo.photo_url}/>
            <span className='feed-comment' key={photo.captions}>{photo.captions}</span>
            <div className='feed-line'></div>
            <div className='feed-comment-like'>
              <img className='feed-like-icon' src='http://image.flaticon.com/icons/png/128/126/126471.png'/>
              <input type='text'placeholder='Add a comment...'/>
            </div>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default withRouter(Photo);
