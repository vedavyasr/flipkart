import React, { PureComponent } from "react";
import Carousel from "./UI/Carousel";
import { Spinner } from "reactstrap";
import Helper from "./UI/ProductCardHelper";
class Home extends PureComponent {
  componentWillMount() {
    // this.props.dispatchers.clearSearchValue();
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
              dispatchers={this.props.dispatchers}
              cart={this.props}
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
