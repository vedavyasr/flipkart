import * as actions from "../action-types";

const INITIAL_STATE = {
  isFetching: Boolean,
  products: [],
  error: {},
  searchValue: "",
  results: [],
  productDetail: [],
  productsToDisplay: []
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.FETCHING_PRODUCTS_INIT:
      return { ...state, isFetching: true };
    case actions.FETCHING_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        productsToDisplay: action.payload,
        isFetching: false
      };
    case actions.FETCHING_PRODUCTS_ERROR:
      return { ...state, error: action.payload, isFetching: false };
    case actions.GET_PRODUCT_DETAIL:
      return { ...state, productDetail: action.payload };
    case actions.SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    case actions.DISABLE_CART:
      return {
        ...state,
        products: action.payload
      };
    case actions.ENABLE_CART:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
