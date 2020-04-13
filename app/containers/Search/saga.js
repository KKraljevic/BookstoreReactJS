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
  var requestURL = `${API_URL}/books/search?searchInput=${searchTerm}`;
  try {
    const result = yield call(request, requestURL);
    yield put(resultLoaded(result.items));
    yield put(push("/search/" + searchTerm));
  } catch (err) {
    yield put(resultLoadingError(err));
  }
}

// Individual exports for testing
export default function* searchSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(LOAD_RESULT, getSearchResult);
}
