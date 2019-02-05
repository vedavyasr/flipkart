import * as actions from "../action-types";

const INITIAL_STATE = {
  //for products list
  loggedIn: false,
  isFetching: false,
  userName: "",
  products: [],
  categories: [],
  error: {}
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.FETCHING_PRODUCTS_INIT:
      return { ...state, isFetching: true };
    case actions.FETCHING_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, isFetching: false };
    case actions.FETCHING_PRODUCTS_ERROR:
      return { ...state, error: action.payload, isFetching: false };
    case actions.FETCHING_CATEGORIES_INIT:
      return { ...state, isFetching: true };
    case actions.FETCHING_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, isFetching: false };
    case actions.FETCHING_CATEGORIES_ERROR:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}
