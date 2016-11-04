import React from 'react';
import { Link, withRouter } from 'react-router';


class Photo extends React.Component {


  componentWillMount() {
    this.props.fetchPhotos()
  }

  render() {
    return (
      <div className='feed-container'>
        <ul>
          {this.props.photos.map((photo, i) => <li key={i}>
            <img key={photo.photo_url} src={photo.photo_url}/>
            <span key={photo.captions}>{photo.captions}</span>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default withRouter(Photo);
