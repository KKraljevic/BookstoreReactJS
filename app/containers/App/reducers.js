import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

// The initial state of the App
export const initialState = {
    loadingFeaturedBooks: false,
    errorFeaturedBooks: false,
    featuredBooks: false,
    loadingNewBooks: false,
    errorNewBooks: false,
    newBooks: false,
    loadingBook: false,
    errorBook: false,
    book: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case DEFAULT_ACTION:
                break;
        }
    });

export default appReducer;