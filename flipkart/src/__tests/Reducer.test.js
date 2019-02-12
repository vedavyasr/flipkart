import React from "react";
import CartReducer from "../app/state/reducers/cartReducer";
import thunk from "redux-thunk";
import * as actions from "../app/state/action-types";
import Cart from "../app/components/Cart";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount, shallow } from "enzyme";
import { Provider } from "redux";
import configureStore from "../app/configureStore";
import configuremockstore from "redux-mock-store";

const middlewares = [thunk];

const mockStore = configuremockstore(middlewares);
// let store = configureStore();
const store = mockStore({ cart: [], cartItems: [], total: 0 });
Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const enzymeWrapper = shallow(<Cart />);
  return {
    enzymeWrapper
  };
}
describe("CartReducer ", () => {
  it("test cart empty list", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("tr").length).toBe(0);
  });
});
