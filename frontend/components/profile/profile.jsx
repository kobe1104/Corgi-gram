import React from 'react';
import { Link, withRouter } from 'react-router';

class Profile extends React.Component {

  render() {
    return(
      <div className='profile-container'>
        <h2>Here's profile</h2>
      </div>
    );
  }

}

export default withRouter(Profile);
