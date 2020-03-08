

const books = [];
let hideBooks = false;
let filter = 1;
let error = null;

const findById = function (id) {
  return this.books.find(currentBook => currentBook.id === id);
};

const addBook = function (book) {
  this.books.push(book);
};

const findAndDelete = function (id) {
  this.books = this.books.filter(currentBook => currentBook.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const findAndUpdate = function (id, newData) {
  let book = this.findByid(id);
  Object.assign(book, newData);
};

export default {
  books,
  hideBooks,
  filter,
  error,
  findById,
  addBook,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate
};










// const books = {
//   bookmarks: [
//     {
//       id: 'x56w',
//       title: 'Title 1',
//       rating: 3,
//       url: 'http://www.title1.com',
//       description: 'lorem ipsum dolor sit',
//       expanded: false
//     },
//     {
//       id: '6ffw',
//       title: 'Title 2',
//       rating: 5,
//       url: 'http://www.title2.com',
//       description: 'dolorum tempore deserunt',
//       expanded: false
//     }

//   ],
//   adding: false,
//   error: null,
//   filter: 0
// };