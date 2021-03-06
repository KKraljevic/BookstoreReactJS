import { take, call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import { featuredBooksLoaded, featuredBooksLoadingError, newBooksLoaded, newBooksLoadingError } from './actions';

import request from 'utils/request';
import { LOAD_FEATURED, LOAD_NEWBOOKS } from './constants';

/**
 * Featured request/response handler
 */
export function* getFeaturedBooks() {
  const requestURL = `http://localhost:9000/books/featured`;
  try {
    const featuredBooks = yield call(request, requestURL);
    yield put(featuredBooksLoaded(featuredBooks));
    console.log(featuredBooks);
  } catch (err) {
    yield put(featuredBooksLoadingError(err));
  }
}
/**
 * Featured books watcher
 */
export function* loadFeaturedBooks() {
  yield takeEvery(LOAD_FEATURED, getFeaturedBooks);
}

/**
 * New books request/response handler
 */
export function* getNewBooks() {
  const requestURL = `http://localhost:9000/books/publishingDate/2019-01-01/2019-12-31?size=4`;
  try {
    // Call our request helper (see 'utils/request')
    const newBooks = yield call(request, requestURL);
    yield put(newBooksLoaded(newBooks));
    console.log(newBooks);
  } catch (err) {
    yield put(newBooksLoadingError(err));
  }

}
/**
 * New books watcher
 */
export function* loadNewBooks() {
  yield takeEvery(LOAD_NEWBOOKS, getNewBooks);
}

// Individual exports for testing
export default function* mainContentSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    loadFeaturedBooks(),
    loadNewBooks(),
  ])
}
