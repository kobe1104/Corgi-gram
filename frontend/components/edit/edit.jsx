import React from 'react';
import { Link, withRouter } from 'react-router';

class Edit extends React.Component {



  render() {
    return(
      <div className='edit-form-container'>
        <form className='edit-form'>
          <div className='edit-form-user'>
            <img className='edit-profile-icon' src={this.props.currentUser.icon_url}/>
            <h2 className='edit-profile-username'>{this.props.currentUser.username}</h2>
          </div>
          <label className='username-edit'>Username:
            <input type="text"
              placeholder={this.props.currentUser.username}
              />
          </label>
          <label className='nickname-edit'>Nickname:
            <input type="text"
              placeholder={this.props.currentUser.nickname}
              />
          </label>
          <label className='email-edit'>Email:
            <input type="text"
              placeholder={this.props.currentUser.email}
              />
          </label>
          <div className='edit-button-container'>
            <input className='edit-submit-button' type='submit' value='Submit'></input>
            <button className='edit-cancel' onClick={() => this.props.router.push('/profile')}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Edit);
