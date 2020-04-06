import { createSelector } from 'reselect';
import { initialState } from './reducers';

//const selectProductListDomain = state => state.get('productList');
const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLoadingFeaturedBooks = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loadingFeaturedBooks,
  );

const makeSelectErrorFeaturedBooks = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.errorFeaturedBooks,
  );

const makeSelectFeaturedBooks = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.featuredBooks,
  );

  const makeSelectLoadingNewBooks = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loadingNewBooks,
  );

const makeSelectErrorNewBooks  = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.errorNewBooks,
  );

const makeSelectNewBooks  = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.newBooks,
  );

/*
const makeSelectProductList = () => {
  createSelector(
    selectProductListDomain, substate =>
    substate.get('data'));
}

const makeSelectLoadingFeaturedBooks = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('loadingFeaturedBooks'),
  );

const makeSelectErrorFeaturedBooks = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('errorFeaturedBooks'),
  );

const makeSelectFeaturedBooks = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('featuredBooks'),
  );

  const makeSelectLoadingNewBooks = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('loadingNewBooks'),
  );

const makeSelectErrorNewBooks  = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('errorNewBooks'),
  );

const makeSelectNewBooks  = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('newBooks'),
  );
*/
const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export { 
  selectGlobal,
  makeSelectFeaturedBooks,
  makeSelectLoadingFeaturedBooks,
  makeSelectErrorFeaturedBooks,
  makeSelectNewBooks,
  makeSelectLoadingNewBooks,
  makeSelectErrorNewBooks,
  makeSelectLocation 
};
