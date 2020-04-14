/*
 *
 * Search actions
 *
 */

import {
  CHANGE_SEARCHTERM,
  LOAD_RESULT,
  LOAD_RESULT_ERROR,
  LOAD_RESULT_SUCCESS,
  CHANGE_SEARCH_OPTIONS,
  CHANGE_SORT,
  CHANGE_SIZE,
  CHANGE_ORDER,
  CHANGE_PAGE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} searchTerm The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_SEARCHTERM
 */
export function changeSearchTerm(searchTerm) {
  return {
    type: CHANGE_SEARCHTERM,
    searchTerm,
  };
}

/**
 * Changes the search options
 *
 * @param  {object} pagination The new options 
 *
 * @return {object} An action object with a type of CHANGE_SEARCH_OPTIONS
 */
export function changeSearchOptions(pagination) {
  return {
    type: CHANGE_SEARCH_OPTIONS,
    pagination,
  };
}
export function changeSort(sort) {
  return {
    type: CHANGE_SORT,
    sort,
  };
}
export function changeSize(size) {
  return {
    type: CHANGE_SIZE,
    size,
  };
}
export function changeOrder(order) {
  return {
    type: CHANGE_ORDER,
    order,
  };
}
export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    page,
  };
}
/**
  * Load the results, this action starts the request saga
  * 
  * @return {object} An action object with a type of LOAD_RESULT
  */
export function loadResult() {
  return {
    type: LOAD_RESULT,

  };
}

/**
  * Dispatched when the result is loaded by the request saga
  *
  * @param  {array} result  The result data
  *
  * @return {object}      An action object with a type of LOAD_RESULT_SUCCESS passing the result
  */
export function resultLoaded(result) {
  return {
    type: LOAD_RESULT_SUCCESS,
    result,
  };
}

/**
  * Dispatched when loading the result fails
  *
  * @param  {object} error The error
  *
  * @return {object}       An action object with a type of LOAD_RESULT_ERROR passing the error
  */
export function resultLoadingError(error) {
  return {
    type: LOAD_RESULT_ERROR,
    error,
  };
}
