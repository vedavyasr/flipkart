import * as actions from "../action-types";

const INITIAL_STATE = {
  userDetails: {},
  isLoading: Boolean,
  orderId: 0,
  error: {}
};

export default function shippingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.PLACE_ORDER:
      return {
        ...state,
        values: action.values
      };
    case actions.SAVE_SUMMARY_INIT:
      return { ...state, isLoading: true };
    case actions.SAVE_SUMMARY_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case actions.SAVE_SUMMARY_SUCCESS:
      return { ...state, isLoading: false, orderId: action.payload };
    default:
      return state;
  }
}
