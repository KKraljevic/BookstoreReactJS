import { takeEvery, call, put, all } from 'redux-saga/effects';
import request from 'utils/request';
import { API_URL } from '../../utils/constants';
import {
  priceAggLoaded,
  priceAggLoadingError,
  publishingAggLoaded,
  publishingAggLoadingError,
  top10Loaded,
  top10LoadingError,
} from './actions';
import { LOAD_PRICEAGG, LOAD_PUBLISHINGAGG, LOAD_TOP10 } from './constants';

export function* getPriceAgg() {
  const requestURL = `${API_URL}/books/agg/price`;
  try {
    const priceAgg = yield call(request, requestURL);
    console.log(priceAgg);
    yield put(priceAggLoaded(priceAgg));
  } catch (err) {
    yield put(priceAggLoadingError(err));
  }
}

export function* loadPriceAgg() {
  yield takeEvery(LOAD_PRICEAGG, getPriceAgg);
}

export function* getPublishingAgg() {
  const requestURL = `${API_URL}/books/agg/publishingDate`;
  try {
    const publishingAgg = yield call(request, requestURL);
    yield put(publishingAggLoaded(publishingAgg));
  } catch (err) {
    yield put(publishingAggLoadingError(err));
  }
}

export function* loadPublishingAgg() {
  yield takeEvery(LOAD_PUBLISHINGAGG, getPublishingAgg);
}

export function* getTop10() {
  const requestURL = `${API_URL}/books/agg/top10`;
  try {
    const top10 = yield call(request, requestURL);
    yield put(top10Loaded(top10));
  } catch (err) {
    yield put(top10LoadingError(err));
  }
}

export function* loadTop10Agg() {
  yield takeEvery(LOAD_TOP10, getTop10);
}

// Individual exports for testing
export default function* overviewSaga() {
  yield all([loadPriceAgg(), loadPublishingAgg(), loadTop10Agg()]);
}
