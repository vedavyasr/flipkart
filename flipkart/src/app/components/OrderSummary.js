import React from "react";

let OrderSummary = () => (
  <div>
    Your Order has been successfully placed. Your order id is :
    <strong> {Math.floor(Math.random() * 10000000)}</strong>
  </div>
);

export default OrderSummary;
