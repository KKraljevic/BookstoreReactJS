import { takeEvery, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { API_URL } from '../../utils/constants';
import { categoryBooksLoaded, categoryBooksLoadingError } from './actions';
import { LOAD_CATEGORY_BOOKS } from './constants';
/**
 * Category books request/response handler
 */
export function* getCategoryBooks(action) {
  const name = action.name;
  const requestURL = `${API_URL}/books/category/${name}`; // Update endpoint url on backend
  try {
    const books = yield call(request, requestURL);
    yield put(categoryBooksLoaded(books.items));
  } catch (err) {
    yield put(categoryBooksLoadingError(err));
  }
}
// Individual exports for testing
export default function* booksPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(LOAD_CATEGORY_BOOKS, getCategoryBooks);
}
