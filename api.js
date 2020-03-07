


const BASE_URL = 'https://thinkful-list-api.herokuapp.com';

function getBook() {
  return fetch(`${BASE_URL}/items`);
}

function createBook(name) {
  let newItem = JSON.stringify({
    name: name
  });

  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: newItem
  })
    .then(res => res.Json);

}

const deleteBook = function (id) {
  return fetch(BASE_URL + '/items/' + id, {
    method: 'DELETE'
  })
    .then(res => res.Json);

};


export default {
  getBook,
  createBook,
  deleteBook
};