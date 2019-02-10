import React from "react";
import Product from "./ProductCard";
import proptypes from "prop-types";
let Search = props => {
  let searchResults = props.products.filter(value =>
    value.name.toLowerCase().includes(props.searchValue.toLowerCase())
  );
  return (
    <div>
      <h2>Search results</h2>

      {searchResults.length ? (
        searchResults.map(product => (
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
        ))
      ) : (
        <h2>OOPsyyyyyyy....!! No Products Found.... </h2>
      )}
    </div>
  );
};

// StarRating.propTypes = {
//   rating: proptypes.number.isRequired
// };

export default Search;
