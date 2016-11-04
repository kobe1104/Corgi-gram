import React from 'react';
import { Link, withRouter } from 'react-router';

class Edit extends React.Component {
  render() {
    return(
      <div className='edit-form-container'>
        <img src={this.props.currentUser.icon_url}/>
        <span>{this.props.currentUser.username}</span>

        <form className='edit-form'>

          <label className='username-edit'>Username
            <input type="text"
              placeholder={this.props.currentUser.username}
              />
          </label>
          <label className='nickname-edit'>Nickname
            <input type="text"
              placeholder={this.props.currentUser.nickname}
              />
          </label>
          <label className='email-edit'>Email
            <input type="text"
              placeholder={this.props.currentUser.email}
              />
          </label>

          <input type='submit' value='Submit'></input>

        </form>
      </div>
    );
  }
}

export default withRouter(Edit);
