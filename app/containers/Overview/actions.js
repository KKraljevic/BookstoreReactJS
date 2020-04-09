/*
 *
 * Overview actions
 *
 */

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

/**
 * Load the featured aggregations data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PRICEAGG
 */
export function loadPriceAgg() {
  return {
    type: LOAD_PRICEAGG,
  };
}

/**
 * Dispatched when the aggregations data are loaded by the request saga
 *
 * @param  {array} priceAgg The aggregation data
 *
 * @return {object}      An action object with a type of LOAD_PRICEAGG_SUCCESS passing the data
 */
export function priceAggLoaded(priceAgg) {
  return {
    type: LOAD_PRICEAGG_SUCCESS,
    priceAgg,
  };
}

/**
 * Dispatched when loading the aggregations data fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PRICEAGG_ERROR passing the error
 */
export function priceAggLoadingError(error) {
  return {
    type: LOAD_PRICEAGG_ERROR,
    error,
  };
}
/**
 * Load the aggregations data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PUBLISHINGAGG
 */
export function loadPublishingAgg() {
  return {
    type: LOAD_PUBLISHINGAGG,
  };
}

/**
 * Dispatched when the aggregations data are loaded by the request saga
 *
 * @param  {array} publishingAgg The aggregations data data
 *
 * @return {object}      An action object with a type of LOAD_PUBLISHINGAGG_SUCCESS passing the aggregations data
 */
export function publishingAggLoaded(publishingAgg) {
  return {
    type: LOAD_PUBLISHINGAGG_SUCCESS,
    publishingAgg,
  };
}

/**
 * Dispatched when loading the aggregations data fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PUBLISHINGAGG_ERROR passing the error
 */
export function publishingAggLoadingError(error) {
  return {
    type: LOAD_PUBLISHINGAGG_ERROR,
    error,
  };
}
/**
 * Load the TOP10 data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_TOP10
 */
export function loadTop10() {
  return {
    type: LOAD_TOP10,
  };
}

/**
 * Dispatched when the TOP10 data are loaded by the request saga
 *
 * @param  {array} top10 The data
 *
 * @return {object}      An action object with a type of LOAD_TOP10_SUCCESS passing the  data
 */
export function top10Loaded(top10) {
  return {
    type: LOAD_TOP10_SUCCESS,
    top10,
  };
}

/**
 * Dispatched when loading the aggregations data fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_TOP10_ERROR passing the error
 */
export function top10LoadingError(error) {
  return {
    type: LOAD_TOP10_ERROR,
    error,
  };
}
