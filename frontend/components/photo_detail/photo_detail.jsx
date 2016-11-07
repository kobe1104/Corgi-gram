import React from 'react';
import { Link, withRouter } from 'react-router';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const photoId = Number(this.props.params.id);
  }

  componentDidMount() {
    const photoId = Number(this.props.params.id);
    this.props.fetchPhoto(photoId);
  }

  render() {
    // debugger
    return(
      <div className= 'photo-detail-container'>
        <img />
      </div>
    );
  }
}

export default withRouter(PhotoDetail);
