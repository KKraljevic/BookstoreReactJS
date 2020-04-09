/*
 * BooksPage Messages
 *
 * This contains all the text for the BooksPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.BooksPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the BooksPage container!',
  },
  notFoundMsg: {
    id: `${scope}.notFoundMsg`,
    defaultMessage: 'No books found! Try with other trems...!',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'This is the BooksPage container!',
  },
  noCategoryBooks: {
    id: `${scope}.noCategoryBooks`,
    defaultMessage: 'There is no books in this category yet...',
  },
});
