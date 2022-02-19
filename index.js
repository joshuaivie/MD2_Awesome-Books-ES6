import { SetCurrentDate, SetCurrentYear } from './modules/date.js';
import { HandleNavigation, RedirectToBookList } from './modules/navigation.js';
import { AddBook, SetupBooks } from './modules/books.js'

SetCurrentDate();
SetCurrentYear();
SetupBooks();

document.body.addEventListener('click', (event) => {
  if (event.target.parentElement.parentElement.id === 'main-navigation') {
    event.preventDefault();
    HandleNavigation(event.target);
  } else if (event.target.id === 'add-book-button') {
    const success = AddBook();
    if (success) {
      RedirectToBookList();
    } else {
      alert('Please ensure you add a title and an author');
    }
  }
});