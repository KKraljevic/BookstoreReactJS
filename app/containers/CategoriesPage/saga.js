import { takeEvery, call, put, select } from 'redux-saga/effects';
import { API_URL } from '../../utils/constants';
import request from 'utils/request';
import {
  categoriesLoaded,
  categoriesLoadingError
} from './actions';
import { LOAD_CATEGORIES } from './constants';

/**
 * Categories request/response handler
 */
export function* getAllCategories() {
  const requestURL = `${API_URL}/books/agg/categories`;
  try {
    const allCategories = yield call(request, requestURL);
    yield put(categoriesLoaded(allCategories));
  } catch (err) {
    yield put(categoriesLoadingError(err));
  }
}

// Individual exports for testing
export default function* categoriesPageSaga() {
  yield takeEvery(LOAD_CATEGORIES, getAllCategories);
}
