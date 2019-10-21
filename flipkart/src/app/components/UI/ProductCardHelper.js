
import React from "react";
import Product from "./ProductCard";
import proptypes from "prop-types";
let Helper = props => {
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

Helper.proptypes = {
  products: proptypes.array.isRequired,
  dispatchers: proptypes.func.isRequired
};

export default Helper;
