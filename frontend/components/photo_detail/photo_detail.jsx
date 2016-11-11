import React from 'react';
import { Link, withRouter } from 'react-router';
var Modal = require("react-modal");



class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modal: true};
    this.closeModal = this.closeModal.bind(this);
  }


  componentWillMount() {
    const photoId = Number(this.props.params.id);
    this.props.fetchPhoto(photoId);
  }

  closeModal() {
    this.props.router.push(`/profile`);
  }

  render() {

    var style = {
        overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(150, 150, 150, 0.75)',
        zIndex          : 10
      },
      content : {
        position        : 'fixed',
        top             : '100px',
        left            : '210px',
        right           : '210px',
        bottom          : '252px',
        padding         : '0px',
        zIndex          : 11
      }
    }

    const photo = this.props.photo;
    return (
      <Modal isOpen={this.state.modal} style={style}
            onRequestClose={this.closeModal}>

        <div className= 'photo-detail-container'>
          <img className='photo-detail-photo' src={photo.photo_url}/>
          <div className='photo-detail-right'>
            <div className='photo-detail-user'>
              <img className='photo-detail-user-icon' src={this.props.currentUser.icon_url}/>
              <span>{this.props.currentUser.username}</span>
            </div>
            <h5 className='photo-detail-captions'>{this.props.currentUser.username}:  {photo.captions}</h5>
            <ul className='photo-detail-comments'>
              {
                this.props.comments.map(
                (comment, i) =>
                 <li key={i}>
                   {comment.user.username}: {comment.body}
                 </li>)
               }
              </ul>
            </div>
          </div>

      </Modal>
    );
  }
}

export default withRouter(PhotoDetail);
