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
        response.data.map(res => (res.disabled = false));

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
        console.log(err, "error");
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
    let id = getState().categories.selectedCategoryId;
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
  cartItem[0].qty = 1;
  dispatch({
    type: actions.ADD_TO_CART,
    payload: cartItem[0]
  });
};

export const searchValue = value => dispatch => {
  dispatch({
    type: actions.SEARCH_VALUE,
    payload: value
  });
};

export const productDetail = productId => (dispatch, getState) => {
  let products = getState().products.products;
  let product = products.filter(({ id }) => id === productId);

  dispatch({
    type: actions.GET_PRODUCT_DETAIL,
    payload: product
  });
};
export const disableCartButton = updatedProducts => ({
  type: actions.DISABLE_CART,
  payload: updatedProducts
});

export const disableButton = productId => (dispatch, getState) => {
  let products = getState().products.products;
  let cart = getState().cart.cart;
  let result = cart.findIndex(obj => {
    return obj.id === productId;
  });
  console.log(result);

  if (result > -1) {
    console.log("already in cart");
  } else {
    const productIndex = products.findIndex(obj => obj.id === productId);
    const updatedProduct = {
      ...products[productIndex],
      disabled: true
    };
    const UpdatedProducts = [
      ...products.slice(0, productIndex),
      updatedProduct,
      ...products.slice(productIndex + 1)
    ];
    dispatch(addToCart(productId));
    dispatch(disableCartButton(UpdatedProducts));
  }
};

export const enableButton = productId => (dispatch, getState) => {
  let products = getState().products.products;
  const productIndex = products.findIndex(obj => obj.id === productId);
  const updatedProduct = {
    ...products[productIndex],
    disabled: false
  };
  const UpdatedProducts = [
    ...products.slice(0, productIndex),
    updatedProduct,
    ...products.slice(productIndex + 1)
  ];
  dispatch(enableAddToCart(UpdatedProducts));
  dispatch(deleteProduct(productId));
};

export const enableAddToCart = updatedProducts => ({
  type: actions.ENABLE_CART,
  payload: updatedProducts
});

export const changeInputValue = values => ({
  type: actions.PLACE_ORDER,
  values
});

export const resetCategoryProducts = () => ({
  type: actions.RESET_CATEGORY_PRODUCTS
});

export const login = token => ({
  type: actions.LOGIN,
  payload: token
});

export const loginAPI = (username, password) => (dispatch, getState) => {
  console.log(username, password);
  axios
    .post("https://reqres.in/api/login", { username, password })
    .then(response => {
      window.localStorage.setItem("logged", response.data.token);
      dispatch(login(response.data.token));
    })
    .catch(err => console.log(err));
};

export const logout = () => ({
  type: actions.LOGOUT
});

export const increaseQty = productId => (dispatch, getState) => {
  let cart = getState().cart.cart;

  const cartIndex = cart.findIndex(obj => obj.id === productId);

  const updatedCartItem = {
    ...cart[cartIndex],
    qty: cart[cartIndex].qty + 1
  };

  const UpdatedCart = [
    ...cart.slice(0, cartIndex),
    updatedCartItem,
    ...cart.slice(cartIndex + 1)
  ];
  let cartItems = [];
  cart.map(item => cartItems.push({ id: item.id, qty: item.qty }));
  dispatch({
    type: actions.INCREASE_QTY,
    payload: { UpdatedCart, cartItems }
  });
};

export const decreaseQty = productId => (dispatch, getState) => {
  let cart = getState().cart.cart;

  const cartIndex = cart.findIndex(obj => obj.id === productId);

  const updatedCartItem = {
    ...cart[cartIndex],
    qty: cart[cartIndex].qty - 1
  };

  const UpdatedCart = [
    ...cart.slice(0, cartIndex),
    updatedCartItem,
    ...cart.slice(cartIndex + 1)
  ];

  let cartItems = [];
  cart.map(item => cartItems.push({ id: item.id, qty: item.qty }));

  dispatch({
    type: actions.DECREASE_QTY,
    payload: { UpdatedCart, cartItems }
  });
};

export const cartTotal = total => ({
  type: actions.CART_TOTAL,
  payload: total
});

export function saveSummary(data) {
  return function saving(dispatch, getState) {
    dispatch(changeInputValue(data));
    let cart = getState().cart.cartItems;
    let total = getState().cart.total;
    let values = {};
    values.userId = Math.floor(Math.random() * 10);
    values.userDetails = data;
    values.products = cart;
    values.amountPaid = total;

    dispatch({ type: actions.SAVE_SUMMARY_INIT });
    axios
      .post("http://reactprojectdbserver.azurewebsites.net/orders", values)
      .then(response => {
        console.log(response);
        dispatch({
          type: actions.SAVE_SUMMARY_SUCCESS,
          payload: response.data.id
        });
      })
      .catch(err => {
        console.log(err, "err in savesumamry");
        dispatch({ type: actions.SAVE_SUMMARY_ERROR, payload: err });
      });
  };
}

export const clearSearchValue = () => ({
  type: actions.CLEAR_SEARCH_VALUE
});
