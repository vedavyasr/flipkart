import React from "react";
import Product from "./ProductCard";

let Helper = props => {
  return (
   <div className="row">
      {props.products.map(product => (
        <Product
          img={product.imageUrl}
          name={product.name}
          shortdesc={product.shortDescription}
          rating={product.ratings.avgRating}
          totalReviews={product.ratings.totalReviews}
          key={product.id}
          id={product.id}
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
