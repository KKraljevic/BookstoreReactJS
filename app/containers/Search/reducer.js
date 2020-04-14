/*
 *
 * Search reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_SEARCHTERM,
  LOAD_RESULT,
  LOAD_RESULT_SUCCESS,
  LOAD_RESULT_ERROR,
  CHANGE_SEARCH_OPTIONS,
  CHANGE_SORT,
  CHANGE_ORDER,
  CHANGE_SIZE,
  CHANGE_PAGE,
} from './constants';

export const initialState = {
  result: {
    books: [],
    loading: false,
    error: false,
  },
  resultPagination: {
    size: 8,
    currentPage: 1,
    sort: "unitsSold",
    order: "DESC",
    totalPages: 1,
    totalItems: 0,
  },
  searchTerm: '',
};

/* eslint-disable default-case, no-param-reassign */
const searchReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_SEARCHTERM:
        draft.searchTerm = action.searchTerm;
        break;
      case CHANGE_SEARCH_OPTIONS:
        draft.resultPagination = action.pagination;
        break;
      case CHANGE_SORT:
        draft.resultPagination.sort = action.sort;
        break;
      case CHANGE_SIZE:
        draft.resultPagination.size = action.size;
        break;
      case CHANGE_ORDER:
        draft.resultPagination.order = action.order;
        break;
      case CHANGE_PAGE:
        draft.resultPagination.currentPage = action.page;
        break;
      case LOAD_RESULT:
        draft.result = { books: [], loading: true, error: false };
        break;
      case LOAD_RESULT_SUCCESS:
        draft.result = { books: action.result, loading: false, error: false };
        break;
      case LOAD_RESULT_ERROR:
        draft.result = { books: [], loading: false, error: action.error };
        break;
    }
  });

export default searchReducer;
