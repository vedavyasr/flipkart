import * as actions from "../action-types";

const INITIAL_STATE = {
  isFetching: false,
  categories: [],
  error: {},
  selectedCategoryId: 0,
  productsByCategory: []
};

export default function categoryReducer(state = INITIAL_STATE, action) {
  console.log("un category reducer", action);

  switch (action.type) {
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
