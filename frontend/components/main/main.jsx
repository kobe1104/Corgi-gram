import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from 'react-search-bar';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.state = {search: ""};
  }

  updateSearch(searchString) {
    this.setState({search: searchString})
  }


  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <header className='main-header'>
            <div className='header-logo-group'>
              <img className='corgi-icon' src='https://res.cloudinary.com/corgi1989/image/upload/c_scale,w_98/v1478899902/corgi_logo_to56fa.png'
                onClick={() => this.props.router.push('/')}/>
              <br/>
              <div className='header-partition'/>
              <br/>
              <div className='main-title' onClick={() => this.props.router.push('/')}><span>Corgi</span>gram</div>
              <br/>
            </div>
            <div className='search-bar'>
              <SearchBar onChange={(input, resolve) => {this.updateSearch(input)}} />
            </div>
            <div className='header-user-group'>
              <br/>
              <div className='wrapper-heart'>
                <img className='user-heart' onClick={() => this.props.router.push('/about')} src='http://res.cloudinary.com/corgi1989/image/upload/c_scale,w_160/v1480996801/developer_icon1_qwdqvb.png'/>
                <span className='heart-text'>About Developer</span>
              </div>
              <br/>
              <div className='wrapper-user'>
                <img className='user-icon' src='https://res.cloudinary.com/corgi1989/image/upload/c_scale,w_64/v1478899937/user_icon_csg3ay.png'
                  onClick={() => this.props.router.push('/profile')}/>
                <span className='user-text'>Profile</span>
              </div>
              <br/>
              <div className='wrapper-logout'>
                <img className='user-logout' onClick={this.props.logout} src="https://res.cloudinary.com/corgi1989/image/upload/c_scale,w_60/v1478899898/logout_icon_igeo93.png"/>
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
