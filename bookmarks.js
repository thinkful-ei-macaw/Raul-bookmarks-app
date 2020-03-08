// [x] render function 
// [x] init 
// [x] import store
// [x] register event listeners
// [] function add handlers
import $ from 'jquery';
import api from './api.js';
import store from './store.js';


const init = () => {
  render();
  bindEventListeners();
};

///////// render function ///////////
function render() {
  generateAddButtons();

}

/// handlers ////



////event listeners ///////////
function bindEventListeners() {

}

///// template generation //////
function generateAddButtons() {
  return `
  <div class="js-buttons">
      <input class="createNewBookmark" type="button" value="+ New Bookmark 📘">
      <input class="filterBy" type="button" value="Filtered By 🚩">
    </div>`;
}

$(init);