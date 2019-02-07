import React, { PureComponent } from "react";
import Product from "./ProductCard";
import Carousel from "./Carousel";
import { Spinner } from "reactstrap";
class Home extends PureComponent {
  componentWillMount() {
    this.props.dispatchers.resetCategoryProducts();
    !this.props.products.length && this.props.dispatchers.fetchProducts();
  }
  render() {
    let i = 0;
    return (
      <div>
        <Carousel />
        <hr />
        <h3 className="text-center">Top Selling Products</h3>
        <hr />
        <div className="container-fluid">
          {!this.props.products.isFetching ? (
            this.props.products.map(
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
                    id={product.id}
                    addToCart={this.props.dispatchers.addToCart}
                    cart={this.props.cart}
                    products={this.props.products}
                    productDetail={this.props.dispatchers.productDetail}
                    disabled={product.disabled}
                    disableButton={this.props.dispatchers.disableButton}
                  />
                )
            )
          ) : (
            <Spinner style={{ width: "3rem", height: "3rem" }} />
          )}
        </div>
      </div>
    );
  }
}
export default Home;
