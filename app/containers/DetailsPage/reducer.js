/*
 *
 * DetailsPage reducer
 *
 */
import produce from 'immer';
import {
    LOAD_BOOK,
    LOAD_BOOK_SUCCESS,
    LOAD_BOOK_ERROR,
} from './constants';

export const initialState = {
    loadingBook: false,
    errorBook: false,
    book: false,
    bookId: false,
};

/* eslint-disable default-case, no-param-reassign */
const detailsPageReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case LOAD_BOOK:
                draft.loadingBook = true;
                draft.errorBook = false;
                draft.book = false;
                draft.bookId = action.bookId;
                break;

            case LOAD_BOOK_SUCCESS:
                draft.book = action.book;
                draft.loadingBook = false;
                break;

            case LOAD_BOOK_ERROR:
                draft.errorBook = action.error;
                draft.loadingBook = false;
                break;
        }
    });

export default detailsPageReducer;