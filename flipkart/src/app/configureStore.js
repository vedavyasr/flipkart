import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./state/reducers/productReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
let configureStore = () => {
  const rootReducer = combineReducers({
    products: productReducer
  });

  const store = createStore(rootReducer, applyMiddleware(logger, thunk));
  return store;
};

export default configureStore;
