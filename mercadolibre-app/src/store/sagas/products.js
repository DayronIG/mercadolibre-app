import { put, takeEvery, call } from 'redux-saga/effects';
import ProductActions, { types } from '../actions/products';
import { getItems, getItemDetail } from '../../services/productsService';

export function* productsSaga() {
  yield takeEvery(types.PRODUCTS_FETCH, handledgetProducts);
  yield takeEvery(types.PRODUCT_DETAIL_FETCH, handledgetProductDetail);
}

function* handledgetProducts({ payload }) {
  let query = payload.query;

  try {
    yield put(ProductActions.fetchProductsStart(true));
    const items = yield call(getItems, query);
    yield put(ProductActions.fetchProductsSuccess(items.data));
  } catch (error) {
    yield put(ProductActions.fetchDetailFailed(true));
    yield put(ProductActions.fetchProductsStart(false));
  }
}

function* handledgetProductDetail({ payload }) {
  try {
    yield put(ProductActions.fetchDetailStart(true));
    const items = yield call(getItemDetail, payload);
    yield put(ProductActions.fetchDetailSuccess(items.data));
  } catch (error) {
    yield put(ProductActions.fetchDetailFailed(true));
    yield put(ProductActions.fetchDetailStart(false));
  }
}
