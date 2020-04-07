/*
 *
 * DetailsPage reducer
 *
 */
import produce from 'immer';
import { LOAD_BOOK, LOAD_BOOK_SUCCESS, LOAD_BOOK_ERROR } from './constants';

export const initialState = {
  loading: false,
  error: false,
  book: null,
};

/* eslint-disable default-case, no-param-reassign */
const detailsPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_BOOK:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_BOOK_SUCCESS:
        draft.book = action.book;
        draft.loading = false;
        break;
      case LOAD_BOOK_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default detailsPageReducer;
