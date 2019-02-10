import React from "react";
import Product from "./ProductCard";
import proptypes from "prop-types";
let Search = props => {
  let searchResults = props.products.filter(value => {
    console.log(props, "srata");
    return value.name.toLowerCase().includes(props.searchValue.toLowerCase());
  });
  return (
    <div>
      <h2>Search results</h2>

      {searchResults.length ? (
        searchResults.map(product => (
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
