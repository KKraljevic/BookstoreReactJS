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
    substate => substate.query,
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
};
