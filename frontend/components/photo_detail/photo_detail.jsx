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
    // debugger

    const photo = this.props.photo;
    return (
      <div className= 'photo-detail-container'>
        <img src={photo.photo_url}/>
        <ul>
          {this.props.comments.map(
            (comment, i) => <li key={i}>{comment.author_id}: {comment.body}</li>)}
        </ul>
      </div>
    );
  }
}

export default withRouter(PhotoDetail);