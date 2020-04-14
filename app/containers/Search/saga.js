import { takeEvery, all, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import {
  LOAD_RESULT,
  CHANGE_SORT,
  CHANGE_ORDER,
  CHANGE_SIZE,
  CHANGE_PAGE,
} from './constants';
import { resultLoaded, resultLoadingError, changeSearchOptions } from './actions';
import { push } from 'connected-react-router'
import { makeSelectQuery, makeSelectPaginationResult } from './selectors';
import { API_URL } from '../../utils/constants';

/**
 * Search request/response handler
 */
export function* getSearchResult() {
  const searchOptions = yield select(makeSelectPaginationResult());
  const searchInput = yield select(makeSelectQuery());
  var str = "searchInput=" + searchInput + "&page=" + searchOptions.currentPage + "&size=" + searchOptions.size + "&sort=" + searchOptions.sort + "&order=" + searchOptions.order;

  var requestURL = `${API_URL}/books/search?${str}`;
  console.log(requestURL);
  try {
    const result = yield call(request, requestURL);
    yield put(changeSearchOptions(result.options));
    yield put(resultLoaded(result.items));
    yield put(push("/search/" + searchInput + "&page=" + searchOptions.currentPage + "&size=" + searchOptions.size));
  } catch (err) {
    yield put(resultLoadingError(err));
  }
}
export function* loadSearchResult() {
  yield takeEvery(LOAD_RESULT, getSearchResult);
}
export function* loadResultWithSort() {
  yield takeEvery(CHANGE_SORT, getSearchResult);
}
export function* loadResultWithSize() {
  yield takeEvery(CHANGE_SIZE, getSearchResult);
}
export function* loadResultWithOrder() {
  yield takeEvery(CHANGE_ORDER, getSearchResult);
}
export function* loadResultWithPage() {
  yield takeEvery(CHANGE_PAGE, getSearchResult);
}

export default function* searchSaga() {
  yield all([loadSearchResult(), loadResultWithOrder(), loadResultWithPage(), loadResultWithSize(), loadResultWithSort()]);
}
