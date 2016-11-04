import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainContainer from './main/main_container';
import ProfileContainer from './profile/profile_container';
import PhotoContainer from './photo/photo_container';

const Root = ({store}) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/main');
    }
  };
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='main' component={MainContainer} onEnter={_ensureLoggedIn}>
            <IndexRoute component={PhotoContainer}/>
            <Route path='profile' component={ProfileContainer}>
              // user photos show here
            </Route>
          </Route>

          <Route path='login' component={LoginFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path='signup' component={SignupFormContainer} onEnter={_redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
