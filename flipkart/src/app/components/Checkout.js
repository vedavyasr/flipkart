import React from "react";
import Shipping from "../containers/ShippingContainer";
import Cart from "./Cart";
import {Card} from 'reactstrap'
export default () => (
  <div className="checkoutpage">
    <hr />
    <h1 className="text-center">Checkout</h1>
    <hr />
    <Card className="Cart">
      <Cart display="none" />
    </Card>
    
    <div className="Shipping">
      <Shipping />
    </div>
  </div>
);
