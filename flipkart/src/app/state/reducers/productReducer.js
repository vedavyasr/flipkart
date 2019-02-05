const INITIAL_STATE = {
  //for products list
  loggedIn: false,
  userName: "",
  products: []
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
