/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_FEATURED,
  LOAD_FEATURED_SUCCESS,
  LOAD_FEATURED_ERROR,
  LOAD_NEWBOOKS,
  LOAD_NEWBOOKS_SUCCESS,
  LOAD_NEWBOOKS_ERROR
} from './constants';

/**
* Load the featured books, this action starts the request saga
*
* @return {object} An action object with a type of LOAD_FEATURED
*/
export function loadFeaturedBooks() {
  return {
    type: LOAD_FEATURED,
  };
}

/**
* Dispatched when the books are loaded by the request saga
*
* @param  {array} featuredBooks The repository data
*
* @return {object}      An action object with a type of LOAD_FEATURED_SUCCESS passing the repos
*/
export function featuredBooksLoaded(featuredBooks) {
  return {
    type: LOAD_FEATURED_SUCCESS,
    featuredBooks,
  };
}

/**
* Dispatched when loading the books fails
*
* @param  {object} error The error
*
* @return {object}       An action object with a type of LOAD_FEATURED_ERROR passing the error
*/
export function featuredBooksLoadingError(error) {
  return {
    type: LOAD_FEATURED_ERROR,
    error,
  };
}
/**
* Load the new books, this action starts the request saga
*
* @return {object} An action object with a type of LOAD_NEWBOOKS
*/
export function loadNewBooks() {
  return {
    type: LOAD_NEWBOOKS,
  };
}

/**
* Dispatched when the new books are loaded by the request saga
*
* @param  {array} newBooks The books data
*
* @return {object}      An action object with a type of LOAD_NEWBOOKS_SUCCESS passing the books 
*/
export function newBooksLoaded(newBooks) {
  return {
    type: LOAD_NEWBOOKS_SUCCESS,
    newBooks,
  };
}

/**
* Dispatched when loading the new books fails
*
* @param  {object} error The error
*
* @return {object}       An action object with a type of LOAD_NEWBOOKS_ERROR passing the error
*/
export function newBooksLoadingError(error) {
  return {
    type: LOAD_NEWBOOKS_ERROR,
    error,
  };
}
