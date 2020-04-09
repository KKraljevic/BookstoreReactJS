/*
 *
 * CategoriesPage actions
 *
 */

import { LOAD_CATEGORIES, LOAD_CATEGORIES_ERROR, LOAD_CATEGORIES_SUCCESS } from './constants';

/**
 * Load the categories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CATEGORIES
 */
export function loadCategories() {
  return {
    type: LOAD_CATEGORIES,
  };
}

/**
 * Dispatched when the categories is loaded by the request saga
 *
 * @param  {array} categories  The categories data
 *
 * @return {object}      An action object with a type of LOAD_CATEGORIES_SUCCESS passing the categories
 */
export function categoriesLoaded(categories) {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    categories,
  };
}

/**
 * Dispatched when loading the categories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CATEGORIES_ERROR passing the error
 */
export function categoriesLoadingError(error) {
  return {
    type: LOAD_CATEGORIES_ERROR,
    error,
  };
}

