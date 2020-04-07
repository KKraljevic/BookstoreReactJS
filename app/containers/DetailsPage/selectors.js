import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the detailsPage state domain
 */

const selectDetailsPageDomain = state => state.detailsPage || initialState;

/**
 * Other specific selectors
 */
const makeSelectLoading = () =>
  createSelector(
    selectDetailsPageDomain,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectDetailsPageDomain,
    substate => substate.error,
  );

const makeSelectBook = () =>
  createSelector(
    selectDetailsPageDomain,
    substate => substate.book,
  );
/**
 * Default selector used by DetailsPage
 */

const makeSelectDetailsPage = () =>
  createSelector(
    selectDetailsPageDomain,
    substate => substate,
  );

export default makeSelectDetailsPage;
export {
  selectDetailsPageDomain,
  makeSelectBook,
  makeSelectDetailsPage,
  makeSelectError,
  makeSelectLoading,
};
