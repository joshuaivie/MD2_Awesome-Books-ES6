import BookHelpers from './bookHelpers.js';
import {
  BookContainer,
  NewBookTitle,
  NewBookAuthor,
} from './elements.js';

const SetupBooks = () => {
  const books = BookHelpers.RetrieveBooks();
  BookHelpers.RenderBooks(books, BookContainer);
};

const AddBook = () => {
  const newBookTitle = NewBookTitle.value;
  const newBookAuthor = NewBookAuthor.value;
  const currentBookList = BookHelpers.RetrieveBooks();
  let updatedBookList = [];
  let bookAdded = false;

  if (newBookTitle === '' || newBookAuthor === '') {
    bookAdded = false;
  } else {
    updatedBookList = BookHelpers.CreateBookEntry(currentBookList, newBookTitle, newBookAuthor);
    BookHelpers.UpdateBookStore(updatedBookList);
    BookHelpers.RenderBooks(updatedBookList, BookContainer);
    bookAdded = true;
  }

  if (bookAdded) {
    NewBookTitle.value = '';
    NewBookAuthor.value = '';
  }

  return bookAdded;
};

const RemoveBook = (bookID) => {
  const currentBookList = BookHelpers.RetrieveBooks();
  const updatedBookList = BookHelpers.RemoveBookEntry(currentBookList, bookID);
  BookHelpers.UpdateBookStore(updatedBookList);
  BookHelpers.RenderBooks(updatedBookList, BookContainer);
};

export { SetupBooks, AddBook, RemoveBook };