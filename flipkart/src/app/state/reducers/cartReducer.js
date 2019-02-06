import * as actions from "../action-types";

const INITIAL_STATE = {
  cart: []
};

export default function categoryReducer(state = INITIAL_STATE, action) {
  console.log("i am in ", action);

  switch (action.type) {
    case actions.DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== action.payload)
      };
    case actions.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    default:
      return state;
  }
}
