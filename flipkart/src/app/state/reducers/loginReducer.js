import * as actions from "../action-types";

let INITIAL_STATE = {
  loggedIn: false,
  isFetching: Boolean,
  userName: "",
  token: "",
  values: {}
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, loggedIn: true };
    case actions.LOGOUT:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}
