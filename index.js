import $ from 'jquery';
import store from './store';
import api from './api';
import './app.css';
import bookmarks from './bookmarks';


const main = function () {

  api.getBooks()
    .then(res => res.jason())
    .then((books) => {
      books.forEach((book) => store.addBook(book));
      bookMark.render();
    });

  bookMarks.bindEventListeners();
  bookMarks.render();

};


$(main);
