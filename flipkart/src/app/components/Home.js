import React, { PureComponent } from "react";
import Carousel from "./UI/Carousel";
import { Spinner } from "reactstrap";
import Helper from "./UI/ProductCardHelper";
class Home extends PureComponent {
  componentWillMount() {
    if (this.props.productsByCategory.length)
      this.props.dispatchers.resetCategoryProducts();

    !this.props.products.length && this.props.dispatchers.fetchProducts();
  }
  render() {
    return (
      <div className="homePage">
        <Carousel />
        <hr />
        <h3 className="text-center">Top Selling Products</h3>
        <hr />
        <div className="container-fluid">
          {!this.props.products.isFetching ? (
            <Helper
              products={this.props.topSellingProducts}
              addToCartDispatcher={this.props.dispatchers.addToCart}
              productDetailDispatcher={this.props.dispatchers.productDetail}
              disableButtonDispatcher={this.props.dispatchers.disableButton}
              cart={this.props.cart}
            />
          ) : (
            <Spinner style={{ width: "3rem", height: "3rem" }} />
          )}
        </div>
      </div>
    );
  }
}
export default Home;
