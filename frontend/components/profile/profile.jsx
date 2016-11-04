import React from 'react';
import { Link, withRouter } from 'react-router';

class Profile extends React.Component {

  componentWillMount() {
    this.props.fetchPhotos()
  }

  render() {
    const userId = this.props.currentUserId;
    const userPhotos = this.props.photos.filter(photo => photo.author_id === userId);

    return(
      <div className='profile-container'>
        <h2>Here's profile</h2>
          {userPhotos.map((photo, i) => <li key={i}>
            <img key={photo.photo_url} src={photo.photo_url}/>
          </li>)}
      </div>
    );
  }

}

export default withRouter(Profile);
