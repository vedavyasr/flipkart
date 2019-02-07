import React from "react";
import Shipping from "./Shipping";
import Cart from "./Cart";
export default () => (
  <div>
    Checkout
    <div className="Shipping">
      <Shipping />
    </div>
    <div className="Cart">
      <Cart />
    </div>
  </div>
);
