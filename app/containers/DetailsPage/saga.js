import { take, call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { bookLoaded, bookLoadingError } from './actions';
import { makeSelectBookId } from './selectors';

import request from 'utils/request';
import { LOAD_BOOK } from './constants';

/**
 * Book request/response handler
 */
export function* getBook() {
    const bookId = yield select(makeSelectBookId());
    const requestURL = `http://localhost:9000/books/id/${bookId}`;
    try {
        const book = yield call(request, requestURL);
        yield put(bookLoaded(book));
        console.log(book);
    } catch (err) {
        yield put(bookLoadingError(err));
    }
}

// Individual exports for testing
export default function* detailsPageSaga() {
    // See example in containers/HomePage/saga.js
    yield takeEvery(LOAD_BOOK, getBook);
}
