import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the categoryBooksPage state domain
 */

const selectCategoryBooksPageDomain = state =>
  state.categoryBooksPage || initialState;

/**
 * Other specific selectors
 */
const makeSelectCurrentCategory = () =>
  createSelector(
    selectCategoryBooksPageDomain,
    substate => substate.currentCategory,
  );

const makeSelectCategoryBooks = () =>
  createSelector(
    selectCategoryBooksPageDomain,
    substate => substate.categoryBooks,
  );

const makeSelectPaginationCatBooks = () =>
  createSelector(
    selectCategoryBooksPageDomain,
    substate => substate.catBooksPagination,
  );
const makeSelectSort = () =>
  createSelector(
    selectCategoryBooksPageDomain,
    substate => substate.catBooksPagination.sort,
  );

const makeSelectSize = () =>
  createSelector(
    selectCategoryBooksPageDomain,
    substate => substate.catBooksPagination.size,
  );

const makeSelectOrder = () =>
  createSelector(
    selectCategoryBooksPageDomain,
    substate => substate.catBooksPagination.order,
  );
/**
 * Default selector used by CategoryBooksPage
 */

const makeSelectCategoryBooksPage = () =>
  createSelector(
    selectCategoryBooksPageDomain,
    substate => substate,
  );

export default makeSelectCategoryBooksPage;
export {
  selectCategoryBooksPageDomain,
  makeSelectCurrentCategory,
  makeSelectCategoryBooks,
  makeSelectPaginationCatBooks,
  makeSelectSort,
  makeSelectSize,
  makeSelectOrder,
};
