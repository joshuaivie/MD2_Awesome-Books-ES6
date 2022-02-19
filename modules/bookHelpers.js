class BookHelpers {
  static CreateBookEntry(existingBooks, title, author) {
    const id = existingBooks.length === 0 ? 0 : existingBooks.length;
    const updatedBooks = existingBooks;

    updatedBooks.push({
      title, author, id, deleted: false,
    });

    return updatedBooks;
  }

  static RemoveBookEntry = (existingBooks, id) => {
    const updatedBooks = existingBooks.map((book) => {
      if (book.id === id) { book.deleted = true; }
      return book;
    });

    return updatedBooks;
  };

  static UpdateBookStore = (books) => {
    localStorage.setItem('books', JSON.stringify(books));
  };

  static RetrieveBooks = () => {
    try {
      Array.from((JSON.parse(localStorage.getItem('books'))));
    } catch (err) {
      localStorage.setItem('books', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('books'));
  };

  static RenderBooks = (bookList, bookContainer) => {
    const filteredBooks = bookList.filter((book) => book.deleted === false);
    if (filteredBooks.length > 0) {
      let booksList = '';
      filteredBooks.forEach((book) => {
        booksList += `
        <li class="book" id="book-${book.id}">
        <div class='book-data'>"${book.title}" by ${book.author}</div>
        <button class="removeButton" type="button" id="remove-book-${book.id}">Remove</button></li>
      `;
      });
      bookContainer.innerHTML = booksList;
    } else {
      bookContainer.innerHTML = 'You do not have any books yet';
    }
  };
}

export default BookHelpers;