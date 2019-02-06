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
  productsByCategory: [],
  cart: [
    { name: "iphone 5", price: 200, QTY: 2, Total: 400, id: 1 },
    { name: "iphonev5s", price: 250, QTY: 1, Total: 250, id: 2 },
    { name: "iphone 6", price: 300, QTY: 2, Total: 600, id: 3 },
    { name: "iphone 6s", price: 350, QTY: 2, Total: 700, id: 4 },
    { name: "iphone x", price: 400, QTY: 2, Total: 800, id: 5 }
  ]
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
    case actions.DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== action.payload)
      };
    default:
      return state;
  }
}
