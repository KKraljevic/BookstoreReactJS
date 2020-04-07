/*
 *
 * MainContent reducer
 *
 */
import produce from 'immer';
import {
  LOAD_FEATURED,
  LOAD_FEATURED_SUCCESS,
  LOAD_FEATURED_ERROR,
  LOAD_NEWBOOKS,
  LOAD_NEWBOOKS_SUCCESS,
  LOAD_NEWBOOKS_ERROR,
} from './constants';

export const initialState = {
  featured: {
    books: [],
    loading: false,
    error: false,
  },
  new: {
    books: [],
    loading: false,
    error: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const mainContentReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_NEWBOOKS:
        draft.new = { books: [], loading: true, error: false };
        break;
      case LOAD_NEWBOOKS_SUCCESS:
        draft.new = { books: action.newBooks, loading: false, error: false };
        break;
      case LOAD_NEWBOOKS_ERROR:
        draft.new = { books: [], loading: false, error: action.error };
        break;
      case LOAD_FEATURED:
        draft.featured = { books: [], loading: true, error: false };
        break;
      case LOAD_FEATURED_SUCCESS:
        draft.featured = {
          books: action.featuredBooks,
          loading: false,
          error: false,
        };
        break;
      case LOAD_FEATURED_ERROR:
        draft.featured = { books: [], loading: false, error: action.error };
        break;
    }
  });

export default mainContentReducer;
