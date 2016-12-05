import React from 'react';
import { Link, withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
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
    this.props.login({user});
  }

  navLink() {
    return <Link to='/signup'>Sign Up</Link>
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="login-error">
          {this.props.errors.map((error, idx) =>
            (<li key={idx}>{error}</li>))}
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
    // debugger
    return  (
      <div className="login-form-container">
          <img className='login-img' src="https://res.cloudinary.com/corgi1989/image/upload/v1478900169/signup_b8e2ae.jpg"/>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          <div className='form-title'><span>Corgi</span>gram</div>
          <br/>
          {this.renderErrors()}
          <div className='login-form'>
            <br/>
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
            <input className='login-button' type='submit' value='Log In' />
          </div>
            <div className='auth-form-or'></div>
          <br/>

            <button className='signup-link' onClick={() => this.props.router.push('/signup')}>Sign Up</button>
          <br/>
          <button className='guest-button' onClick={this.guestLogin}>Guest</button>
        </form>
      </div>
    );
  }
}





export default withRouter(LoginForm);
