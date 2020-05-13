import config from '../config';

export const extractLastUrlPartFromUrlString = (string = '') => {
  const stringToArray = string.split('/');
  const extractedLink = stringToArray[stringToArray.length - 2];

  return Number(extractedLink);
};

export const compareValues = (key, order = 'asc') => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
};

export const calculateVisibleRange = (itemsArray, currentPage) => {
  if (!itemsArray || itemsArray.length === 0) return;
  let start =
    currentPage === 1 ? 0 : currentPage * config.pageItems - config.pageItems;
  let end =
    currentPage === 1
      ? config.pageItems
      : currentPage * config.pageItems - config.pageItems + config.pageItems;

  return itemsArray.slice(start, end);
};
