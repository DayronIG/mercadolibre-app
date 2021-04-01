import { handleActions } from 'redux-actions';
import { types } from '../actions/products';

const initialState = {
  items: [],
  categories:[],
  detail: {},
  isFetching: false,
  isError: false,
};

export default handleActions(
  {
    [types.PRODUCTS_FETCH_START]: (state) => ({
      ...state,
      isFetching: true,
    }),
    [types.PRODUCTS_FETCH_SUCCESS]: (state, { payload: { categories,items } }) => ({
      ...state,
      isFetching: false,
      categories,
      items
    }),
    [types.PRODUCTS_FETCH_FAILED]: (state) => ({
      ...state,
      isFetching: false,
      isError: true,
    }),
    [types.PRODUCT_DETAIL_FETCH_START]: (state) => ({
      ...state,
      isFetching: true,
    }),
    [types.PRODUCT_DETAIL_FETCH_SUCCESS]: (state, { payload: { items } }) => ({
      ...state,
      isFetching: false,
      detail:items,
    }),
    [types.PRODUCT_DETAIL_FETCH_FAILED]: (state) => ({
      ...state,
      isFetching: false,
      isError: true,
    }),

    //PRODUCTS_FETCH_FAILED
  },
  initialState
);
