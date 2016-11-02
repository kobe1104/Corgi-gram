import React from 'react';
import { Link, withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
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
    this.props.login({user});
  }

  navLink() {
    return <Link to='/signup'>Sign Up</Link>
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((error, idx) =>
            (<li key={idx}>{error}</li>))}
        </ul>
      );
    }
  }


  render () {
    return  (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          Welcome to Corgigram!
          <br/>
          Please Log In Or {this.navLink()}
          {this.renderErrors()}
          <div className='login-form'>
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
            <br/>
            <input type='submit' value='Log In' />
          </div>
        </form>
      </div>
    );
  }
}





export default withRouter(LoginForm);
