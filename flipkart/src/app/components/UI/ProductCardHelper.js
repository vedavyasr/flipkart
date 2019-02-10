import React from "react";
import Product from "./ProductCard";

let Helper = props => {
  return (
    <div className="row">
      {props.products.map(product => (
        <Product
          key={product.id}
          product={product}
          addToCart={props.addToCartDispatcher}
          cart={props.cart.cart}
          products={props.products.products}
          productDetail={props.productDetailDispatcher}
          disabled={product.disabled}
          disableButton={props.disableButtonDispatcher}
        />
      ))}
    </div>
  );
};

export default Helper;
