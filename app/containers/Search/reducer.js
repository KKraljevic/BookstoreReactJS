/*
 *
 * Search reducer
 *
 */
import produce from 'immer';
import { CHANGE_SEARCHTERM, LOAD_RESULT, LOAD_RESULT_SUCCESS, LOAD_RESULT_ERROR } from './constants';

export const initialState = {
  result: {
    books: [],
    loading: false,
    error: false,
  },
  query: '',
};

/* eslint-disable default-case, no-param-reassign */
const searchReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_SEARCHTERM:
        draft.query = action.searchTerm;
        break;
      case LOAD_RESULT:
        draft.result = { books: [], loading: true, error: false };
        break;
      case LOAD_RESULT_SUCCESS:
        draft.result = {
          books: action.result,
          loading: false,
          error: false,
        };
        break;
      case LOAD_RESULT_ERROR:
        draft.result = { books: [], loading: false, error: action.error };
        break;
    }
  });

export default searchReducer;
