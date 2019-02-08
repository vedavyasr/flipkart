import React from "react";
import Shipping from "../containers/ShippingContainer";
import Cart from "./Cart";
export default () => (
  <div>
    <hr />
    <h1 className="text-center">Checkout</h1>
    <hr />
    <div className="Cart">
      <Cart display="none" />
    </div>
    <div className="Shipping">
      <Shipping />
    </div>
  </div>
);
