import React from 'react';
import { Link, withRouter } from 'react-router';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);

  }

  componentWillMount() {
    this.props.fetchPhotos();
    this.props.fetchAllFollows()
  }



  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, photo) => {
        if (error === null) {
          this.uploadPhoto(photo[0].secure_url);
        }
      }
    )
  }

  uploadPhoto(url) {

    const photo = {
      author_id: this.props.currentUser.id,
      photo_url: url,
      captions: 'Welcome to Corgigram!!'
    };
    this.props.createPhoto(photo);
  };




  render() {
    return(
        <div className='profile-container'>
          <div className='profile-box'>
            <img className='profile-icon' src={this.props.currentUser.icon_url}/>
            <div className='profile-info'>
              <h2 className='profile-username'>{this.props.currentUser.username}</h2>
              <span className='profile-nickname'>{this.props.currentUser.nickname}</span>
              <div className='profile-likes-follows'>
                <span>{this.props.photos.length} posts</span>
                <span>{this.props.currentUser.follows.length} followers</span>
                <span>{this.props.following} following</span>
              </div>
            </div>
            <div className= 'profile-buttons'>
              <button className='profile-edit-button' onClick={() =>
                   this.props.router.push('/edit')}>Edit Profile</button>
              <button className='profile-add-photo-button'
                onClick={this.upload}>Add Photo</button>
            </div>
          </div>
          <div className='profile-photos'>
            {
              this.props.photos.map((photo, i) => (
                <div key={i}>
                  <img onClick={() =>
                      this.props.router.push(`/photo-detail/${photo.id}`)}
                     key={photo.photo_url} src={photo.photo_url}/>
                 </div>))
            }
          {this.props.children}
        </div>
        </div>

    );
  }

}

export default withRouter(Profile);
