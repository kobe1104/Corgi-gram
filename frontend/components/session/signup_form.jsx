import React from 'react';
import { Link, withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', email: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
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


  render () {
    return  (
      <div className="signup-form-container">
        <div>
          <img src="https://s-media-cache-ak0.pinimg.com/736x/b0/00/17/b0001726dc9b455618abb4e6ff824305.jpg"/>
        </div>
        <form onSubmit={this.handleSubmit} className='signup-form-box'>
          Welcome to Corgigram!
          <br/>
          To see more
          <br/>
          Please Sign Up Or {this.navLink()}
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
            <label>
              <input type='text'
                value={this.state.password}
                placeholder='Password'
                onChange={this.update("password")}
                className='password-input' />
            </label>
            <label>
              <input type='text'
                value={this.state.email}
                placeholder='Email'
                onChange={this.update("email")}
                className='email-input' />
            </label>
            <br/>
            <input type='submit' value='Sign Up!!' />
          </div>
        </form>
      </div>
    );
  }
}





export default withRouter(SignupForm);
