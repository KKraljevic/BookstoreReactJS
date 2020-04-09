/*
 *
 * CategoriesPage reducer
 *
 */
import produce from 'immer';
import { LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_ERROR } from './constants';

export const initialState = {
  allCategories: {
    categories: [],
    loading: false,
    error: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const categoriesPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CATEGORIES:
        draft.allCategories = { categories: [], loading: true, error: false };
        break;
      case LOAD_CATEGORIES_SUCCESS:
        draft.allCategories = { categories: action.categories, loading: false, error: false };
        break;
      case LOAD_CATEGORIES_ERROR:
        draft.allCategories = { categories: [], loading: false, error: action.error };
        break;
    }
  });

export default categoriesPageReducer;
