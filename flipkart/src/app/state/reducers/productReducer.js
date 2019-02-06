import * as actions from "../action-types";

const INITIAL_STATE = {
  //for products list
  loggedIn: false,
  isFetching: false,
  userName: "",
  products: [],
  categories: [],
  error: {},
  selectedCategoryId: 0,
  productsByCategory: []
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
      return { ...state, isFetching: false, categories: action.payload };
    case actions.FETCHING_CATEGORIES_ERROR:
      return { ...state, error: action.payload, isFetching: false };
    case actions.SAVE_CATEGORY_ID:
      return { ...state, selectedCategoryId: action.payload };
    case actions.FILTER_BY_CATEGORY:
      return { ...state, productsByCategory: action.payload };

    default:
      return state;
  }
}
