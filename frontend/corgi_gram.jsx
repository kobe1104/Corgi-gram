import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as Action from './actions/follow_actions';
// import * as Action from './actions/comment_actions';
// import * as Action from './actions/like_actions';
import * as Api from './util/follow_api_util';
var Modal = require("react-modal");


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
  window.Action = Action;
  window.Api = Api;

  $( ".about-linkedin" ).click(function() {
   window.open("https://www.linkedin.com/in/henry-hsu-58073189");
 });

 $( ".about-github" ).click(function() {
   window.open("https://github.com/kobe1104/Corgi-gram");
 });

 $( ".about-email" ).click(function() {
   window.location.href="mailto:hhsu0219@gmail.com";
 });
})
