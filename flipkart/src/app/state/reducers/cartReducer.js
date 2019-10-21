import * as actions from '../action-types';

const INITIAL_STATE = {
  cart: [],
  cartItems: [],
  total: 0
};

export default function categoryReducer(state = INITIAL_STATE, action) {
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
    case actions.INCREASE_QTY:
      return {
        ...state,
        cart: action.payload.UpdatedCart,
        cartItems: action.payload.cartItems
      };
    case actions.DECREASE_QTY:
      return {
        ...state,
        cart: action.payload.UpdatedCart,
        cartItems: action.payload.cartItems
      };
    case actions.CART_TOTAL:
      return {
        ...state,
        total: action.payload
      };
    default:
      return state;
  }
}
