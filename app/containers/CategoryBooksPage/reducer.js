/*
 *
 * CategoryBooksPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_CATEGORY_BOOKS,
  LOAD_CATEGORY_BOOKS_ERROR,
  LOAD_CATEGORY_BOOKS_SUCCESS,
  CHANGE_ORDER,
  CHANGE_SIZE,
  CHANGE_SORT,
  CHANGE_PAGINATION,
  CHANGE_PAGE,
  SET_CURRENT_CATEGORY,
} from './constants';

export const initialState = {
  currentCategory: '',
  categoryBooks: {
    loading: false,
    error: false,
    books: [],
  },
  catBooksPagination: {
    size: 8,
    currentPage: 1,
    sort: "unitsSold",
    order: "DESC",
    totalPages: 1,
    totalItems: 0,
  },
};

/* eslint-disable default-case, no-param-reassign */
const categoryBooksPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CATEGORY_BOOKS:
        draft.currentCategory = action.name;
        draft.categoryBooks = { books: [], loading: true, error: false };
        break;
      case LOAD_CATEGORY_BOOKS_SUCCESS:
        draft.categoryBooks = { books: action.categoryBooks, loading: false, error: false };
        break;
      case LOAD_CATEGORY_BOOKS_ERROR:
        draft.categoryBooks = { books: [], loading: false, error: action.error };
        break;
      case SET_CURRENT_CATEGORY:
        draft.currentCategory = action.currentCategory;
        break;
      case CHANGE_PAGINATION:
        draft.catBooksPagination = action.pagination;
        break;
      case CHANGE_SORT:
        draft.catBooksPagination.sort = action.sort;
        break;
      case CHANGE_SIZE:
        draft.catBooksPagination.size = action.size;
        break;
      case CHANGE_ORDER:
        draft.catBooksPagination.order = action.order;
        break;
      case CHANGE_PAGE:
        draft.catBooksPagination.currentPage = action.page;
        break;
    }

  });

export default categoryBooksPageReducer;
