import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

const Root = ({store}) => (
  <Provider>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='/sign-in' component={SessionFormContainer} />
      </Route>
    </Router>
  </Provider>
)

export default Root;
