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
        <form onSubmit={this.handleSubmit} className='signup-form-box'>
          Welcome to Corgigram!
          <br/>
          Please Sign Up Or {this.navLink()}
          {this.renderErrors()}
          <div className='signup-form'>
            <br/>
            <label> Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="username-input" />
            </label>
            <label> Password:
              <input type='text'
                value={this.state.password}
                onChange={this.update("password")}
                className='password-input' />
            </label>
            <label> Email:
              <input type='text'
                value={this.state.email}
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
