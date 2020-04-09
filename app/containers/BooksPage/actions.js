/*
 *
 * BooksPage actions
 *
 */

import {
  LOAD_CATEGORY_BOOKS,
  LOAD_CATEGORY_BOOKS_SUCCESS,
  LOAD_CATEGORY_BOOKS_ERROR
} from './constants';

/**
 * Load the books by category, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CATEGORY_BOOKS
 */
export function loadCategoryBooks(name) {
  return {
    type: LOAD_CATEGORY_BOOKS,
    name,
  };
}

/**
 * Dispatched when the books by category is loaded by the request saga
 *
 * @param  {array} categoryBooks  The books by category data
 *
 * @return {object}      An action object with a type of LOAD_CATEGORY_BOOKS_SUCCESS passing the books
 */
export function categoryBooksLoaded(categoryBooks) {
  return {
    type: LOAD_CATEGORY_BOOKS_SUCCESS,
    categoryBooks,
  };
}

/**
 * Dispatched when loading the books by category fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CATEGORY_BOOKS_ERROR passing the error
 */
export function categoryBooksLoadingError(error) {
  return {
    type: LOAD_CATEGORY_BOOKS_ERROR,
    error,
  };
}
