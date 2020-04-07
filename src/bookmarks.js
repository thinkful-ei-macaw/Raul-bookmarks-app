// [x] render function 
// [x] init 
// [x] import store
// [x] register event listeners
// [] function add handlers
import $ from 'jQuery';
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
      <form method="post" class="js-form">
      <label for="rating">Rating</label>
        <select id="rating" name="site-rating">
        <option>⭐+</option>
        <option>⭐⭐+</option>
        <option>⭐⭐⭐+</option>
        <option>⭐⭐⭐⭐+</option>
        <option>⭐⭐⭐⭐⭐</option>
        </select>
        <input type="text" name="name" placeholder="site name" required>
        <input type="text" name="URL" placeholder="URL" required>
        <input type="textfield" name="textfield" placeholder="Describe website!" required>
        
         <input type="submit" value="submit">
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
  $('.js-main').on('click', '.createNewBookmark', event => {
    store.addingBook = true;
    render();
  });
}

function handleCancelClick() {
  $('.js-main').on('click', 'button', event => {
    store.addingBook = false;
    render();
  });
}





////event listeners ///////////


function bindEventListeners() {
  handleBookmarkAddClick();
  handleCancelClick();
}



$(init);