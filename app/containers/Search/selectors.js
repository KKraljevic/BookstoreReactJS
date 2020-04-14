import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the search state domain
 */

const selectSearchDomain = state => state.search || initialState;

/**
 * Other specific selectors
 */
const makeSelectResult = () =>
  createSelector(
    selectSearchDomain,
    substate => substate.result,
  );

const makeSelectErrorResult = () =>
  createSelector(
    selectSearchDomain,
    substate => substate.errorResult,
  );

const makeSelectLoadingResult = () =>
  createSelector(
    selectSearchDomain,
    substate => substate.loadingResult,
  );

const makeSelectQuery = () =>
  createSelector(
    selectSearchDomain,
    substate => substate.searchTerm,
  );

const makeSelectPaginationResult = () =>
  createSelector(
    selectSearchDomain,
    substate => substate.resultPagination,
  );
const makeSelectSort = () =>
  createSelector(
    selectSearchDomain,
    substate => substate.resultPagination.sort,
  );

const makeSelectSize = () =>
  createSelector(
    selectSearchDomain,
    substate => substate.resultPagination.size,
  );

const makeSelectOrder = () =>
  createSelector(
    selectSearchDomain,
    substate => substate.resultPagination.order,
  );

/**
 * Default selector used by Search
 */

const makeSelectSearch = () =>
  createSelector(
    selectSearchDomain,
    substate => substate,
  );

export default makeSelectSearch;
export {
  selectSearchDomain,
  makeSelectResult,
  makeSelectLoadingResult,
  makeSelectErrorResult,
  makeSelectQuery,
  makeSelectPaginationResult,
  makeSelectSort,
  makeSelectSize,
  makeSelectOrder,
};
