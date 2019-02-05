import React, { Component } from "react";
import Product from "./productCard";
import Carousel from "./carousel";
class Home extends Component {
  componentWillMount() {
    this.props.dispatchers.fetchProducts();
  }
  render() {
    let i = 0;
    return (
      <div>
        <Carousel />
        {this.props.products.products.map(
          product =>
            ++i &&
            i < 5 && (
              <Product
                img={product.imageUrl}
                name={product.name}
                shortdesc={product.shortDescription}
                rating={product.ratings.avgRating}
                totalReviews={product.ratings.totalReviews}
                key={product.id}
              />
            )
        )}
      </div>
    );
  }
}
export default Home;
