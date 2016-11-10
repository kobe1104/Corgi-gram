import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
  constructor(props) {
    super(props);
  };

  componentWillMount() {
    this.props.fetchPhotos();
    this.props.fetchAllFollows();
    this.props.fetchAllUsers();
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default withRouter(User);
