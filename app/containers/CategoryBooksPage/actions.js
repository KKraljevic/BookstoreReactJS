/*
 *
 * CategoryBooksPage actions
 *
 */

import {
  LOAD_CATEGORY_BOOKS,
  LOAD_CATEGORY_BOOKS_ERROR,
  LOAD_CATEGORY_BOOKS_SUCCESS,
  CHANGE_SIZE,
  CHANGE_ORDER,
  CHANGE_SORT,
  CHANGE_PAGE,
  CHANGE_PAGINATION,
  SET_CURRENT_CATEGORY
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
export function setCurrentCategory(currentCategory) {
  return {
    type: SET_CURRENT_CATEGORY,
    currentCategory,
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
  }
};
export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    page,
  }
};
export function changePagination(pagination) {
  return {
    type: CHANGE_PAGINATION,
    pagination,
  }
};