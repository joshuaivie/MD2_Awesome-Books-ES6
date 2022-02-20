import { SetCurrentDate, SetCurrentYear } from './modules/date.js';
import { HandleNavigation, RedirectToBookList } from './modules/navigation.js';
import { SetupBooks, AddBook, RemoveBook } from './modules/books.js';

SetCurrentDate();
SetCurrentYear();
SetupBooks();

document.body.addEventListener('click', (event) => {
  const eventTarget = event.target;
  const eventTargetID = `${event.target.id}`;

  if (eventTarget.parentElement.parentElement.id === 'main-navigation') {
    event.preventDefault();
    HandleNavigation(eventTarget);
  } else if (eventTargetID === 'add-book-button') {
    const success = AddBook();
    if (success) {
      RedirectToBookList();
    } else {
      alert('Please ensure you add a title and an author');
    }
  } else if (eventTargetID.includes('remove-book-')) {
    const eventTargetIDArray = eventTargetID.split('-');
    const bookID = parseInt(eventTargetIDArray[eventTargetIDArray.length - 1], 10);
    RemoveBook(bookID);
  }
});