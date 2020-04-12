/*
 *
 * BooksPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_CATEGORY_BOOKS,
  LOAD_CATEGORY_BOOKS_ERROR,
  LOAD_CATEGORY_BOOKS_SUCCESS
} from './constants';

export const initialState = {
  categoryBooks: {
    loading: false,
    error: false,
    books: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const booksPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CATEGORY_BOOKS:
        draft.categoryBooks = { books: [], loading: true, error: false };
        break;
      case LOAD_CATEGORY_BOOKS_SUCCESS:
        draft.categoryBooks = { books: action.categoryBooks, loading: false, error: false };
        break;
      case LOAD_CATEGORY_BOOKS_ERROR:
        draft.categoryBooks = { books: [], loading: false, error: action.error };
        break;
    }
  });

export default booksPageReducer;
