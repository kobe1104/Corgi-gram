import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from 'react-search-bar';



class Main extends React.Component {
  
  changeImg() {
    if (document.getElementsByClassName('user-heart').src === "https://freeiconshop.com/files/edd/heart-outline.png") {
      document.getElementsByClassName('user-heart').src = "http://iconshow.me/media/images/ui/ios7-icons/png/512/heart_1.png"
    } else {
      document.getElementsByClassName('user-heart').src = "https://freeiconshop.com/files/edd/heart-outline.png"
    }
  }

  render () {
    // debugger
    if (this.props.currentUser) {
      return (
        <div>
          <header className='main-header'>
            <div className='header-logo-group'>
              <img className='corgi-icon' src='https://d30y9cdsu7xlg0.cloudfront.net/png/190441-200.png'
                onClick={() => this.props.router.push('/')}/>
              <br/>
              <div className='header-partition'/>
              <br/>
              <div className='main-title' onClick={() => this.props.router.push('/')}><span>Corgi</span>gram</div>
              <br/>
            </div>
            <div className='search-bar'>
              <SearchBar onChange={(input, resolve) => {}} />
            </div>
            <div className='header-user-group'>
              <br/>
              <div className='wrapper-heart'>
                <img className='user-heart' onClick={() => this.props.router.push('/about')} src='https://freeiconshop.com/files/edd/heart-outline.png'/>
                <span className='heart-text'>About Developer</span>
              </div>
              <br/>
              <div className='wrapper-user'>
                <img className='user-icon' src='https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-256.png'
                  onClick={() => this.props.router.push('/profile')}/>
                <span className='user-text'>Profile</span>
              </div>
              <br/>
              <div className='wrapper-logout'>
                <img className='user-logout' onClick={this.props.logout} src="http://image.flaticon.com/icons/png/128/53/53113.png"/>
                <span className='logout-text'>Log Out</span>
              </div>
            </div>
          </header>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

}

export default withRouter(Main);
