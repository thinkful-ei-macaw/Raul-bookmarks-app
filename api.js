


const BASE_URL = 'https://thinkful-list-api.herokuapp.com/raul';

function getBooks() {
  return fetch(`${BASE_URL}/bookmarks`);
}

function createBook(name) {
  let newBook = JSON.stringify({ name: name });
  return fetch(`${BASE_URL}/bookmarks`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: newBook
  });
}

const deleteBook = function (id) {
  return fetch(BASE_URL + '/bookmarks/' + id, {
    method: 'DELETE'
  });
};


export default {
  getBooks,
  createBook,
  deleteBook
};