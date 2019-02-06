import * as actions from "../action-types";

const INITIAL_STATE = {
  //for products list
  loggedIn: false,
  isFetching: false,
  userName: "",
  products: [],
  error: {},
  searchValue: "",
  results: []
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.FETCHING_PRODUCTS_INIT:
      return { ...state, isFetching: true };
    case actions.FETCHING_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, isFetching: false };
    case actions.FETCHING_PRODUCTS_ERROR:
      return { ...state, error: action.payload, isFetching: false };
    case actions.SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };

    default:
      return state;
  }
}
