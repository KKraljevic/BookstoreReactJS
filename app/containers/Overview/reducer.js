/*
 *
 * Overview reducer
 *
 */
import produce from 'immer';
import {
  LOAD_PRICEAGG,
  LOAD_PRICEAGG_ERROR,
  LOAD_PRICEAGG_SUCCESS,
  LOAD_PUBLISHINGAGG,
  LOAD_PUBLISHINGAGG_ERROR,
  LOAD_PUBLISHINGAGG_SUCCESS,
  LOAD_TOP10,
  LOAD_TOP10_SUCCESS,
  LOAD_TOP10_ERROR,
} from './constants';

export const initialState = {
  priceAgg: {
    agg: [],
    loading: false,
    error: false,
  },
  publishingAgg: {
    agg: [],
    loading: false,
    error: false,
  },
  top10: {
    agg: [],
    loading: false,
    error: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const overviewReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_PRICEAGG:
        draft.priceAgg = { agg: [], loading: true, error: false };
        break;
      case LOAD_PRICEAGG_SUCCESS:
        draft.priceAgg = { agg: action.priceAgg, loading: false, error: false };
        break;
      case LOAD_PRICEAGG_ERROR:
        draft.priceAgg = { agg: [], loading: false, error: false };
        break;
      case LOAD_PUBLISHINGAGG:
        draft.publishingAgg = { agg: [], loading: true, error: false };
        break;
      case LOAD_PUBLISHINGAGG_SUCCESS:
        draft.publishingAgg = { agg: action.publishingAgg, loading: false, error: false };
        break;
      case LOAD_PUBLISHINGAGG_ERROR:
        draft.publishingAgg = { agg: [], loading: false, error: false };
        break;
      case LOAD_TOP10:
        draft.top10 = { agg: [], loading: true, error: false };
        break;
      case LOAD_TOP10_SUCCESS:
        draft.top10 = { agg: action.top10, loading: false, error: false };
        break;
      case LOAD_TOP10_ERROR:
        draft.top10 = { agg: [], loading: false, error: false };
        break;
    }
  });

export default overviewReducer;
