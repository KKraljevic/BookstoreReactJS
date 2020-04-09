import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the overview state domain
 */

const selectOverviewDomain = state => state.overview || initialState;

/**
 * Other specific selectors
 */
const makeSelectPublishingAgg = () =>
  createSelector(
    selectOverviewDomain,
    substate => substate.publishingAgg,
  );

const makeSelectPriceAgg = () =>
  createSelector(
    selectOverviewDomain,
    substate => substate.priceAgg,
  );

const makeSelectTop10 = () =>
  createSelector(
    selectOverviewDomain,
    substate => substate.top10,
  );

/**
 * Default selector used by Overview
 */

const makeSelectOverview = () =>
  createSelector(
    selectOverviewDomain,
    substate => substate,
  );

export default makeSelectOverview;
export { selectOverviewDomain, makeSelectPublishingAgg, makeSelectPriceAgg, makeSelectTop10 };
