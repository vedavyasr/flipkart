import React from "react";
import Product from "./ProductCard";

let Search = props => {
  console.log(props, "search...");
  let searchResults = props.products.filter(value =>
    value.name.toLowerCase().includes(props.searchValue.toLowerCase())
  );
  console.log(searchResults, "in searchRresults");
  return (
    <div>
      <h2>Search results</h2>

      {searchResults.length ? (
        searchResults.map(product => (
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
        ))
      ) : (
        <h2>OOPsyyyyyyy....!! No Products Found.... </h2>
      )}
    </div>
  );
};

export default Search;
