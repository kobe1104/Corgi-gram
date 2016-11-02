import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = ({children}) => (
  <div>
    <h1>Corgigram</h1>
    {children}
  </div>
)

export default App;
