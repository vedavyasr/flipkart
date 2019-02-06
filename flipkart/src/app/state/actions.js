import * as actions from "./action-types";
import axios from "axios";

export const fetchingData = () => ({
  type: actions.FETCHING_PRODUCTS_INIT
});

export const fetchingDataSuccess = data => ({
  type: actions.FETCHING_PRODUCTS_SUCCESS,
  payload: data
});

export const fetchingDataError = err => ({
  type: actions.FETCHING_PRODUCTS_ERROR,
  payload: err
});

export function fetchProducts() {
  return function apiCall(dispatch, getState) {
    dispatch(fetchingData);
    let config = {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json"
    };
    axios
      .get("http://reactprojectdbserver.azurewebsites.net/products", config)
      .then(response => {
        console.log(response, " response");
        dispatch(fetchingDataSuccess(response.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchingDataError(err));
      });
  };
}

export const fetchingCategories = () => ({
  type: actions.FETCHING_CATEGORIES_INIT
});

export const fetchingCategoriesSuccess = value => ({
  type: actions.FETCHING_CATEGORIES_SUCCESS,
  payload: value
});

export const fetchingCategoriesError = err => ({
  type: actions.FETCHING_CATEGORIES_ERROR,
  payload: err
});

export function fetchCategories() {
  return function apiCall(dispatch, getState) {
    dispatch(fetchingCategories);
    let config = {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json"
    };
    axios
      .get("http://reactprojectdbserver.azurewebsites.net/categories", config)
      .then(response => {
        console.log(response, "response");
        dispatch(fetchingCategoriesSuccess(response.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchingCategoriesError(err));
      });
  };
}

export const saveCategoryId = id => dispatch => {
  dispatch({
    type: actions.SAVE_CATEGORY_ID,
    payload: id
  });
};

export const filterProducts = products => ({
  type: actions.FILTER_BY_CATEGORY,
  payload: products
});

export function filterByCategory() {
  return function filteringProducts(dispatch, getState) {
    let id = getState().products.selectedCategoryId;
    let products = getState().products.products;
    let results = products.filter(({ categoryId }) => categoryId === id);
    dispatch(filterProducts(results));
  };
}

export const deleteProduct = id => ({
  type: actions.DELETE_CART_ITEM,
  payload: id
});

export const addToCart = productid => (dispatch, getState) => {
  let products = getState().products.products;
  let cartItem = products.filter(({ id }) => id === productid);
  dispatch({
    type: actions.ADD_TO_CART,
    payload: cartItem[0]
  });
};

// export function addProductToCard(productid) {
//   return function adding(dispatch, getState) {
//     // console.log(cartItem," in output");

//     dispatch(addToCart(cartItem[0]));
//   };
// }
