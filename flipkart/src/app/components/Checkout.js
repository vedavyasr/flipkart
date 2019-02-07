import React from "react";
import Shipping from "./Shipping";
import Cart from "./Cart";
export default () => (
  <div>
    <h1>Checkout</h1>
    <hr />
    <div className="Cart">
      <Cart />
    </div>
    <div className="Shipping">
      <Shipping />
    </div>
  </div>
);
