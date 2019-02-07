import * as actions from "../action-types";

const INITIAL_STATE = {
  values: {}
};

export default function shippingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.PLACE_ORDER:
      return {
        ...state,
        values: action.values
      };
    default:
      return state;
  }
}
