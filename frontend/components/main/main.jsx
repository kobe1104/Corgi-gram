import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from 'react-search-bar';



class Main extends React.Component {

  componentDidUpdate() {
    if (!this.props.currentUser) {
      this.props.router.push('/login');
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
            <img className='user-heart' src='http://image.flaticon.com/icons/png/128/126/126471.png'/>
            <br/>
            <img className='user-icon' src='https://cdn1.iconfinder.com/data/icons/photography-outline-2/512/oYPS__human_avatar_portrait_photography_picture_photo-512.png'
              onClick={() => this.props.router.push('main/profile')}/>
            <br/>
            <button className='main-logout-button' onClick={this.props.logout}>Log out</button>
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }

}

export default withRouter(Main);
