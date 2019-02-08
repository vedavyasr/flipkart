import * as actions from "../action-types";

let INITIAL_STATE = {
  loggedIn: window.localStorage.getItem("logged") ? true : false,
  isFetching: Boolean,
  userName: "",
  token: window.localStorage.getItem("logged")
    ? window.localStorage.getItem("logged")
    : "",
  values: {}
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, loggedIn: true, token: action.payload };
    case actions.LOGOUT:
      window.localStorage.clear();
      return { ...state, loggedIn: false, token: "" };
    default:
      return state;
  }
}
