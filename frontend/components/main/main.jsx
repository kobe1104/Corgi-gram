import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from 'react-search-bar';



class Main extends React.Component {

  componentDidUpdate() {
    if (!this.props.currentUser) {
      this.props.router.push('/login');
    }
  }

  changeImg() {
    if (document.getElementsByClassName('user-heart').src === "https://freeiconshop.com/files/edd/heart-outline.png") {
      document.getElementsByClassName('user-heart').src = "http://iconshow.me/media/images/ui/ios7-icons/png/512/heart_1.png"
    } else {
      document.getElementsByClassName('user-heart').src = "https://freeiconshop.com/files/edd/heart-outline.png"
    }
  }

  render () {

    return (
      <div>
        <header className='main-header'>
          <div className='header-logo-group'>
            <img className='corgi-icon' src='https://d30y9cdsu7xlg0.cloudfront.net/png/190441-200.png'
              onClick={() => this.props.router.push('/main')}/>
            <br/>
            <div className='header-partition'/>
            <br/>
            <div className='main-title' onClick={() => this.props.router.push('/main')}><span>Corgi</span>gram</div>
            <br/>
          </div>
          <div className='search-bar'>
            <SearchBar onChange={(input, resolve) => {
                // get suggestions based on `input`, then pass them to `resolve()`
              }} />
          </div>
          <div className='header-user-group'>
            <img className='wing-icon' src="https://cdn.vectorstock.com/i/thumb-large/03/70/10190370.jpg"
              onClick={() => this.props.router.push('main/about')}/>
            <br/>
            <img className='user-heart' src='https://freeiconshop.com/files/edd/heart-outline.png'/>
            <br/>
            <img className='user-icon' src='https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-256.png'
              onClick={() => this.props.router.push('main/profile')}/>
            <br/>
            <img className='user-logout' onClick={this.props.logout} src="http://image.flaticon.com/icons/png/128/53/53113.png"/>

          </div>
        </header>
        {this.props.children}
      </div>
    );
  }

}

export default withRouter(Main);
