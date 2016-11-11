import React from 'react';
import MainContainer from './main/main_container';


const App = ({children}) => (
  <div>
    <MainContainer/>
    {children}
  </div>
)

export default App;
