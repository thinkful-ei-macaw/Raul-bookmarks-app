// [x] render function 
// [x] init 
// [x] import store
// [x] register event listeners
// [] function add handlers
import $ from 'jquery';
import api from './api';

import store from './store';


const init = () => {
  render();
  bindEventListeners();
  initialView();

};

///// template generation //////
function initialView() {
  return `<div class="js-buttons">
      <input class="createNewBookmark" type="button" value="+ New Bookmark 📘">
      <input class="filterBy" type="button" value="Filtered By 🚩">
    </div>`;
}

function addFormTemplate() {
  return `<section class="section-buttons">
      <form method="#" class="js-form">
      <label for="rating">Rating</label>
        <select id="rating" name="site-rating">
        <option value="1">⭐+</option>
        <option value="2">⭐⭐+</option>
        <option value="3">⭐⭐⭐+</option>
        <option value="4">⭐⭐⭐⭐+</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
        <input type="text" name="name" placeholder="site name" required>
        <input type="text" name="URL" placeholder="URL" required>
        <input type="textfield" name="textfield" placeholder="Describe website!" >
        
         <button type="submit" id="add-new-bookmark">Add Book</button>
         <button type="button">Cancel</button>
         </form>
       </section> 
    `;
}



///////// render function ///////////
function render() {
  $('#main').html(initialView());
  if (store.addingBook) {
    $('#main').append(addFormTemplate());
  }
}


/// handlers ////
function handleBookmarkAddClick() {
  $('.js-main').on('click', '.createNewBookmark', () => {
    store.addingBook = true;
    render();
  });
}

function handleCancelClick() {
  $('.js-main').on('click', 'button', () => {
    store.addingBook = false;
    render();
  });
}


function handleCreateNewBook() {
  $('js-form').submit(() => {
    event.preventDefault();
    const createdBook = $('.js-bookmark-added').val();
    $('.js-bookmark-added').val('');
    api.createBook(createdBook)
      .then(res => res.json())
      .then((newBook) => {
        store.addBook(newBook);
        render();
      });
  });
}




////event listeners ///////////


function bindEventListeners() {
  handleBookmarkAddClick();
  handleCancelClick();
  handleCreateNewBook();
}



$(init);