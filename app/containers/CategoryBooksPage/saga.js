import { takeEvery, call, put, select, all } from 'redux-saga/effects';

import { categoryBooksLoaded, categoryBooksLoadingError, changePagination } from './actions';
import { LOAD_CATEGORY_BOOKS, CHANGE_SORT, CHANGE_SIZE, CHANGE_ORDER, CHANGE_PAGE } from './constants';
import { makeSelectPaginationCatBooks, makeSelectCurrentCategory } from './selectors';
import request from 'utils/request';
import { API_URL } from '../../utils/constants';

export function* getCategoryBooks() {
  const name = yield select(makeSelectCurrentCategory());
  const catBooksPagination = yield select(makeSelectPaginationCatBooks());
  console.log(catBooksPagination);
  var str = "page=" + catBooksPagination.currentPage + "&size=" + catBooksPagination.size + "&sort=" + catBooksPagination.sort + "&order=" + catBooksPagination.order;
  const requestURL = `${API_URL}/books/category/${name}?${str}`;
  try {
    const books = yield call(request, requestURL);
    console.log(books);
    yield put(changePagination(books.options));
    yield put(categoryBooksLoaded(books.items));
  } catch (err) {
    yield put(categoryBooksLoadingError(err));
  }
}
export function* loadCategoryBooks() {
  yield takeEvery(LOAD_CATEGORY_BOOKS, getCategoryBooks);
}
export function* loadBooksWithSort() {
  yield takeEvery(CHANGE_SORT, getCategoryBooks);
}
export function* loadBooksWithSize() {
  yield takeEvery(CHANGE_SIZE, getCategoryBooks);
}
export function* loadBooksWithOrder() {
  yield takeEvery(CHANGE_ORDER, getCategoryBooks);
}
export function* loadBooksWithPage() {
  yield takeEvery(CHANGE_PAGE, getCategoryBooks);
}
// Individual exports for testing
export default function* categoryBooksPageSaga() {
  yield all([loadCategoryBooks(), loadBooksWithPage(), loadBooksWithOrder(), loadBooksWithSize(), loadBooksWithSort()]);
}
