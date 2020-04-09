import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the categoriesPage state domain
 */

const selectCategoriesPageDomain = state =>
  state.categoriesPage || initialState;

/**
 * Other specific selectors
 */
const makeSelectAllCategories = () =>
  createSelector(
    selectCategoriesPageDomain,
    substate => substate.allCategories,
  );

/**
 * Default selector used by CategoriesPage
 */

const makeSelectCategoriesPage = () =>
  createSelector(
    selectCategoriesPageDomain,
    substate => substate,
  );

export default makeSelectCategoriesPage;
export { selectCategoriesPageDomain, makeSelectAllCategories };
