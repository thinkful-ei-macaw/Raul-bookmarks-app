// [x] render function 
// [x] init 
// [x] import store
// [x] register event listeners
// [] function add handlers
import $ from 'jQuery';
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
      <form action="/action_page.php" method="post">
        <input type="text" name="name" placeholder="site name" required>
        <input type="text" name="URL" placeholder="URL" required>
        <input type="submit" value="submit">
        <button type="button">Cancel</button>
    </section>`;
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
  $('.js-main').on('click', '.createNewBookmark', event => {
    store.addingBook = true;
    render();
  });
}

////event listeners ///////////


function bindEventListeners() {
  handleBookmarkAddClick();
}



$(init);