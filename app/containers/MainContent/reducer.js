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
  LOAD_NEWBOOKS_ERROR
} from './constants';
import { any } from 'prop-types';

export const initialState = {
  loadingFeaturedBooks: false,
  errorFeaturedBooks: false,
  featuredBooks: false,
  loadingNewBooks: false,
  errorNewBooks: false,
  newBooks: false,
};

/* eslint-disable default-case, no-param-reassign */
const mainContentReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_NEWBOOKS:
        draft.loadingNewBooks = true;
        draft.errorNewBooks = false;
        draft.newBooks = false;
        break;

      case LOAD_NEWBOOKS_SUCCESS:
        draft.newBooks = action.newBooks;
        draft.loadingNewBooks = false;
        break;

      case LOAD_NEWBOOKS_ERROR:
        draft.errorNewBooks = action.error;
        draft.loadingNewBooks = false;
        break;

      case LOAD_FEATURED:
        draft.loadingFeaturedBooks = true;
        draft.errorFeaturedBooks = false;
        draft.featuredBooks = false;
        break;

      case LOAD_FEATURED_SUCCESS:
        draft.featuredBooks = action.featuredBooks;
        draft.loadingFeaturedBooks = false;
        break;

      case LOAD_FEATURED_ERROR:
        draft.errorFeaturedBooks = action.error;
        draft.loadingFeaturedBooks = false;
        break;
    }
  });

export default mainContentReducer;