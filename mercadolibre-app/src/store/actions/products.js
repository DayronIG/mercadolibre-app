import { createAction } from 'redux-actions';

export const types = {
  PRODUCTS_FETCH: `Products/fetch`,
  PRODUCTS_FETCH_START: `Products/fetch-start`,
  PRODUCTS_FETCH_SUCCESS: `Products/fetch-success`,
  PRODUCTS_FETCH_FAILED: `Products/fetch-failed`,
  PRODUCT_DETAIL_FETCH: `ProductDetail/fetch`,
  PRODUCT_DETAIL_FETCH_START: `ProductDetail/fetch-start`,
  PRODUCT_DETAIL_FETCH_SUCCESS: `ProductDetail/fetch-success`,
  PRODUCT_DETAIL_FETCH_FAILED: `ProductDetail/fetch-failed`,
};
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  fetchProducts: createAction(types.PRODUCTS_FETCH),
  fetchProductsStart: createAction(types.PRODUCTS_FETCH_START),
  fetchProductsSuccess: createAction(types.PRODUCTS_FETCH_SUCCESS),
  fetchProductsFailed: createAction(types.PRODUCTS_FETCH_FAILED),
  fetchDetail: createAction(types.PRODUCT_DETAIL_FETCH),
  fetchDetailStart: createAction(types.PRODUCT_DETAIL_FETCH_START),
  fetchDetailSuccess: createAction(types.PRODUCT_DETAIL_FETCH_SUCCESS),
  fetchDetailFailed: createAction(types.PRODUCT_DETAIL_FETCH_FAILED),
};
