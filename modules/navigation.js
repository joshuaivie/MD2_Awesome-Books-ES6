import {
  BookListSection,
  AddBookSection,
  ContactSection,
  BookListSectionLink,
  NewBookSectionLink,
  ContactSectionLink,
} from './elements.js';

const updateSectionsDisplay = (elementID) => {
  let sectionDisplay;
  switch (elementID) {
    case 'book-list-section-link':
      sectionDisplay = ['inherit', 'none', 'none'];
      break;
    case 'new-book-section-link':
      sectionDisplay = ['none', 'inherit', 'none'];
      break;
    case 'contact-section-link':
      sectionDisplay = ['none', 'none', 'inherit'];
      break;
    default:
      break;
  }
  [
    BookListSection.style.display,
    AddBookSection.style.display,
    ContactSection.style.display,
  ] = sectionDisplay;
};

const updateNavigationStyle = (elementID) => {
  BookListSectionLink.classList.remove('active');
  NewBookSectionLink.classList.remove('active');
  ContactSectionLink.classList.remove('active');

  switch (elementID) {
    case 'book-list-section-link':
      BookListSectionLink.classList.add('active');
      break;
    case 'new-book-section-link':
      NewBookSectionLink.classList.add('active');
      break;
    case 'contact-section-link':
      ContactSectionLink.classList.add('active');
      break;
    default:
      break;
  }
}

const RedirectToBookList = () => {
  BookListSection.style.display = 'inherit';
  AddBookSection.style.display = 'none';
  ContactSection.style.display = 'none';
};

const HandleNavigation = (element) => {
  const elementID = element.id;
  updateNavigationStyle(elementID);
  updateSectionsDisplay(elementID);
};

export { RedirectToBookList, HandleNavigation };