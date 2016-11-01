import React from 'react';

const SessionForm () => (
  <div>
    <h1>Log In</h1>
    <form>
      <label for='username'>Username</label>
      <input type='text' id='username' />
      <label for='password'>{"Password"}</label>
      <input type='text' id='password'/>
      <input type='submit' value='Submit'/>
    </form>
  </div>
)

export default SessionForm;
