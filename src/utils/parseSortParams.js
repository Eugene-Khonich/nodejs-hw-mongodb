import { SORT_ORDER } from '../constants/index.js';

const parseSortOrder = (sortOrder) => {
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
  if (isKnownOrder) {
    return sortOrder;
  }
  return SORT_ORDER;
};

const parseSortBy = (sortBy) => {
  const keysOfContact = ['name', 'isFavourite', 'contactType'];
  if (keysOfContact.includes(sortBy)) {
    return sortBy;
  }
  return 'name';
};

export const parseSortParams = (query) => {
  const { sortOrder, sortBy } = query;
  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);
  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};