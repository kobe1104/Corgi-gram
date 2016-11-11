import React from 'react';
import { Link, withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', email: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn()
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  navLink() {
    return <Link to='/login'>Log In</Link>
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      );
    }
  }

  guestLogin(e) {
    e.preventDefault();
    const user = {
      username: 'Sir. Corgilim',
      password: 'password'
     };
    this.props.login({user});
  }



  render () {
    return  (
      <div className="signup-form-container">
        <img className='signup-form-img' src="https://wallpaperscraft.com/image/welsh_corgi_dog_view_grass_105205_1920x1080.jpg"/>
        <form onSubmit={this.handleSubmit} className='signup-form-box'>
          <div className='form-title'><span>Corgi</span>gram</div>
          <br/>
          {this.renderErrors()}
          <div className='signup-form'>
            <br/>
            <label>
              <input type="text"
                value={this.state.username}
                placeholder='Username'
                onChange={this.update("username")}
                className="username-input" />
            </label>
            <br/>
            <label>
              <input type='password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.update("password")}
                className='password-input' />
            </label>
            <br/>
            <label>
              <input type='text'
                value={this.state.email}
                placeholder='Email'
                onChange={this.update("email")}
                className='email-input' />
            </label>
            <br/>
            <input className='signup-button' type='submit' value='Sign Up!!' />
          </div>
          <div className='auth-form-or'></div>
          <br/>
          <button className='login_link' onClick={() => this.props.router.push('/login')}>Log In</button>
          <br/>
          <button className='guest-button' onClick={this.guestLogin}>Guest</button>

        </form>
      </div>
    );
  }
}





export default withRouter(SignupForm);
