import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';
import { CurrentDateElement, CurrentYearElement } from './elements.js';

const currentDate = DateTime.now();
const currentYear = currentDate.year;
const currentDateFormatted = `${currentDate.toLocaleString()} ${currentDate.toLocaleString(DateTime.TIME_WITH_SECONDS)}`;

const SetCurrentDate = () => {
  CurrentDateElement.innerHTML = currentDateFormatted;
};

const SetCurrentYear = () => {
  CurrentYearElement.innerHTML = currentYear;
};

export {
  SetCurrentDate,
  SetCurrentYear,
};