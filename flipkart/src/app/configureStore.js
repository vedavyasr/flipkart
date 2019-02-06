import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./state/reducers/productReducer";
import categoryReducer from "./state/reducers/categoryReducer";
import cartReducer from "./state/reducers/cartReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
let configureStore = () => {
  const rootReducer = combineReducers({
    products: productReducer,
    categories: categoryReducer,
    cart: cartReducer
  });

  const store = createStore(rootReducer, applyMiddleware(logger, thunk));
  return store;
};

export default configureStore;
