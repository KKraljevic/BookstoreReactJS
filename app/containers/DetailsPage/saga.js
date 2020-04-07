import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import { bookLoaded, bookLoadingError } from './actions';

import { LOAD_BOOK } from './constants';
import { API_URL } from '../../utils/constants';

/**
 * Book request/response handler
 */
export function* getBook(action) {
  const id = { action };
  const requestURL = `${API_URL}/books/${id}`; // Update endpoint url on backend
  try {
    const book = yield call(request, requestURL);
    yield put(bookLoaded(book));
  } catch (err) {
    yield put(bookLoadingError(err));
  }
}

// Individual exports for testing
export default function* detailsPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(LOAD_BOOK, getBook);
}
