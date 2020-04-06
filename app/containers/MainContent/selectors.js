import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainContent state domain
 */

const selectMainContentDomain = state => state.mainContent || initialState;

/**
 * Other specific selectors
 */
const makeSelectLoadingFeaturedBooks = () =>
  createSelector(
    selectMainContentDomain,
    substate => substate.loadingFeaturedBooks,
  );

const makeSelectErrorFeaturedBooks = () =>
  createSelector(
    selectMainContentDomain,
    substate => substate.errorFeaturedBooks,
  );

const makeSelectFeaturedBooks = () =>
  createSelector(
    selectMainContentDomain,
    substate => substate.featuredBooks,
  );

const makeSelectLoadingNewBooks = () =>
  createSelector(
    selectMainContentDomain,
    substate => substate.loadingNewBooks,
  );

const makeSelectErrorNewBooks = () =>
  createSelector(
    selectMainContentDomain,
    substate => substate.errorNewBooks,
  );

const makeSelectNewBooks = () =>
  createSelector(
    selectMainContentDomain,
    substate => substate.newBooks,
  );

/**
 * Default selector used by MainContent
 */

const makeSelectMainContent = () =>
  createSelector(
    selectMainContentDomain,
    substate => substate,
  );

export default makeSelectMainContent;
export {
  selectMainContentDomain,
  makeSelectFeaturedBooks,
  makeSelectLoadingFeaturedBooks,
  makeSelectErrorFeaturedBooks,
  makeSelectNewBooks,
  makeSelectLoadingNewBooks,
  makeSelectErrorNewBooks,
};
