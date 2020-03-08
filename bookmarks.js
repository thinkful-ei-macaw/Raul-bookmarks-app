// [] render function 
// [x] init 
// [x] import store
// [] register event listeners
// [] function add handlers

import api from './api.js';
import './app.css';
import store from './store.js';


const init = () => {
  render();
  bindEventListeners();
};

const render = function () {

  // filter bookmarks if book.checked===false
  let books = [...store.books];
  if (store.hideCheckedBooks) {
    books = books.filter(book => !book.checked);
  };



  const bindEventListeners = function () {

  }


  $(init);