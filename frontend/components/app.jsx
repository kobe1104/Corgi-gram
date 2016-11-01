import React from 'react';
import SessionFormContainer from './session_form_container';

const App = ({child}) => (
  <div>
    <h1>Corgigram</h1>
    <SessionFormContainer />
    {child}
  </div>
)

export default App;
