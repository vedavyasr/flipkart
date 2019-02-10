import React from "react";
import Product from "./ProductCard";

let Helper = props => {
  console.log(props, "in heper");
  return (
    <div className="row">
      {props.products.map(product => (
        <Product
          key={product.id}
          product={product}
          addToCart={props.dispatchers.addToCart}
          cart={props.cart.cart}
          products={props.products.products}
          productDetail={props.dispatchers.productDetail}
          disabled={product.disabled}
          disableButton={props.dispatchers.disableButton}
        />
      ))}
    </div>
  );
};

export default Helper;
