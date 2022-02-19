import { SetCurrentDate, SetCurrentYear } from './modules/date.js';
import HandleNavigation from './modules/navigation.js';

SetCurrentDate();
SetCurrentYear();

document.body.addEventListener('click', (event) => {
  if (event.target.parentElement.parentElement.id === 'main-navigation') {
    event.preventDefault();
    HandleNavigation(event.target);
  }
});