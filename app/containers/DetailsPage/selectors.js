import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the detailsPage state domain
 */

const selectDetailsPageDomain = state => state.detailsPage || initialState;

/**
 * Other specific selectors
 */
const makeSelectLoadingBook = () =>
  createSelector(
    selectDetailsPageDomain,
    substate => substate.loadingBook,
  );

const makeSelectErrorBook = () =>
  createSelector(
    selectDetailsPageDomain,
    substate => substate.errorBook,
  );

const makeSelectBook = () =>
  createSelector(
    selectDetailsPageDomain,
    substate => substate.book,
  );

  const makeSelectBookId = () =>
  createSelector(
    selectDetailsPageDomain,
    substate => substate.bookId,
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
  makeSelectErrorBook,
  makeSelectLoadingBook,
  makeSelectBookId,
};
