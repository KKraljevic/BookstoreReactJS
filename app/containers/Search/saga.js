import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_RESULT } from './constants';
import { resultLoaded, resultLoadingError } from './actions';
import { push } from 'connected-react-router'
import { makeSelectQuery } from './selectors';
import { API_URL } from '../../utils/constants';

/**
 * Search request/response handler
 */
export function* getSearchResult() {
  const searchTerm = yield select(makeSelectQuery());
  console.log(searchTerm);
  if (searchTerm == '') {
    yield put(push("/"));
  }
  const requestURL = `${API_URL}/books/search/${searchTerm}`;
  try {
    const result = yield call(request, requestURL);
    yield put(resultLoaded(result));
    yield put(push("/search/" + searchTerm));
  } catch (err) {
    yield put(resultLoadingError(err));
  }
}

// Individual exports for testing
export default function* searchSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_RESULT, getSearchResult);
}
