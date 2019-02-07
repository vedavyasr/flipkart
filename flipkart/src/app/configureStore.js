import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./state/reducers/productReducer";
import categoryReducer from "./state/reducers/categoryReducer";
import cartReducer from "./state/reducers/cartReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import loginReducer from "./state/reducers/loginReducer";
import shippingReducer from "./state/reducers/ShippingReducer";
let configureStore = () => {
  const rootReducer = combineReducers({
    products: productReducer,
    categories: categoryReducer,
    cart: cartReducer,
    shipping: shippingReducer,
    login: loginReducer
  });

  const store = createStore(rootReducer, applyMiddleware(logger, thunk));
  return store;
};

export default configureStore;
