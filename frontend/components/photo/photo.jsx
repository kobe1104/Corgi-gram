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
            <img key={photo.photo_url} src={photo.photo_url}/>
            <span key={photo.captions}>{photo.captions}</span>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default withRouter(Photo);
