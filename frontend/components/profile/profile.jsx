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

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, photo) => {
        if (error === null) {
          this.uploadPhoto(photo[0].url);
        }
      }
    )
  }

  uploadPhoto(url) {
    const photo = {
      author_id: this.currentUser.id,
      photo_url: url,
      captions: 'will get from a text input'
    };
    this.props.createPhoto(photo);
  };


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
          <button onClick={this.upload} className='profile-add-photo-button'>Add Photos</button>
          <button className='profile-edit-button' onClick={() => this.props.router.push('main/edit')}>Edit Profile</button>
            {userPhotos.map((photo, i) => <li key={i}>
              <img key={photo.photo_url} src={photo.photo_url}/>
            </li>)}
          {this.props.children}
        </div>

    );
  }

}

export default withRouter(Profile);
