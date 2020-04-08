import { call, put, takeEvery, all } from 'redux-saga/effects';
import request from 'utils/request';
import {
  featuredBooksLoaded,
  featuredBooksLoadingError,
  newBooksLoaded,
  newBooksLoadingError,
} from './actions';

import { LOAD_FEATURED, LOAD_NEWBOOKS } from './constants';
import { API_URL } from '../../utils/constants';

/**
 * Featured request/response handler
 */
export function* getFeaturedBooks() {
  const requestURL = `${API_URL}/books/featured`;
  try {
    const featuredBooks = yield call(request, requestURL);
    yield put(featuredBooksLoaded(featuredBooks));
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
  const requestURL = `${API_URL}/books/publishingDate/2019-01-01/2019-12-31?size=4`;
  try {
    // Call our request helper (see 'utils/request')
    const newBooks = yield call(request, requestURL);
    yield put(newBooksLoaded(newBooks));
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
  yield all([loadFeaturedBooks(), loadNewBooks()]);
}
