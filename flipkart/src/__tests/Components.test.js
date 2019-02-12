//Vedavyas
import React from "react";
import Cart from "../app/components/Cart";
import Footer from "../app/components/Footer";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount, shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("<Cart />", () => {
  it("renders <Cart /> component", () => {
    const component = shallow(<Cart />);

    expect(component.find("tr").length).toBe(0);
  });
  it("renders <Footer /> component", () => {
    const component = shallow(<Footer />);

    expect(component).toHaveLength(1);
  });
});
