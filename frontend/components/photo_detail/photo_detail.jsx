import React from 'react';
import { Link, withRouter } from 'react-router';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount() {
    const photoId = Number(this.props.params.id);
    this.props.fetchPhoto(photoId);
  }



  render() {

    const photo = this.props.photo;
    return (
      <div className= 'photo-detail-container'>
        <img className='photo-detail-photo' src={photo.photo_url}/>
        <div className='photo-detail-right'>
          <div className='photo-detail-user'>
            <img className='photo-detail-user-icon' src={this.props.currentUser.icon_url}/>
            <span>{this.props.currentUser.username}</span>
          </div>
          <h5 className='photo-detail-captions'>{this.props.currentUser.username}:  {photo.captions}</h5>
          <ul className='photo-detail-comments'>
            {this.props.comments.map(
              (comment, i) => <li key={i}>{comment.author_id}: {comment.body}</li>)}
            </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoDetail);
