import React from 'react';
import { Link, withRouter } from 'react-router';

class Profile extends React.Component {

  componentWillMount() {
    this.props.fetchPhotos();
  }
  // user photos are not rednering until refresh
  // componentDidMount() {
  //
  // }

  render() {
    const userId = this.props.currentUser.id;
    const userPhotos = this.props.photos.filter(photo => photo.author_id === userId);

    return(
        <div className='profile-container'>
          <h2>Here's profile</h2>
          <div className='profile-box'>
            <img className='profile-icon' src={this.props.currentUser.icon_url}/>
            <div className='profile-info'>
              <h2 className='profile-username'>{this.props.currentUser.username}</h2>
              <span className='profile-nickname'>{this.props.currentUser.nickname}</span>
            </div>
          </div>
          <button onClick={() => this.props.router.push('main/edit')}>Edit Profile</button>
            {userPhotos.map((photo, i) => <li key={i}>
              <img key={photo.photo_url} src={photo.photo_url}/>
            </li>)}
          {this.props.children}
        </div>

    );
  }

}

export default withRouter(Profile);
