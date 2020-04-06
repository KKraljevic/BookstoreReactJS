import {
    LOAD_BOOK,
    LOAD_BOOK_ERROR,
    LOAD_BOOK_SUCCESS,
  } from './constants';
  
  /**
  * Load the book, this action starts the request saga
  *
  * @return {object} An action object with a type of LOAD_BOOK
  */
  export function loadBook(bookId) {
    return {
      type: LOAD_BOOK,
      bookId
    };
  }
  
  /**
  * Dispatched when the book is loaded by the request saga
  *
  * @param  {array} book  The book data
  *
  * @return {object}      An action object with a type of LOAD_FEATURED_SUCCESS passing the book
  */
  export function bookLoaded(book) {
    return {
      type: LOAD_BOOK_SUCCESS,
      book,
    };
  }
  
  /**
  * Dispatched when loading the book fails
  *
  * @param  {object} error The error
  *
  * @return {object}       An action object with a type of LOAD_BOOK_ERROR passing the error
  */
  export function bookLoadingError(error) {
    return {
      type: LOAD_BOOK_ERROR,
      error,
    };
  }