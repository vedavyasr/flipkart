import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Product from "./ProductCard";
import { Spinner } from "reactstrap";
class Products extends PureComponent {
  componentWillMount() {
    !(
      this.props.categories.productsByCategory.length ||
      this.props.products.products.length
    ) && this.props.dispatchers.fetchProducts();
  }
  render() {
    console.log(this.props, "in compoasdf");

    return (
      <div>
        <h2>Products</h2>
        <hr />
        <h3>Filter:</h3>
        <input
          type="search"
          onChange={e => this.props.dispatchers.searchValue(e.target.value)}
        />
        <hr />
        {!this.props.products.isFetching ? (
          this.props.products.searchValue ? (
            <h2>searching</h2>
          ) : this.props.categories.productsByCategory.length ? (
            this.props.categories.productsByCategory.map(product => (
              <Product
                img={product.imageUrl}
                name={product.name}
                shortdesc={product.shortDescription}
                rating={product.ratings.avgRating}
                totalReviews={product.ratings.totalReviews}
                key={product.id}
                id={product.id}
                addToCart={this.props.dispatchers.addToCart}
                cart={this.props.cart.cart}
                products={this.props.products.products}
                productDetail={this.props.dispatchers.productDetail}
                disabled={product.disabled}
                disableButton={this.props.dispatchers.disableButton}
              />
            ))
          ) : (
            this.props.products.products.map(product => (
              <Product
                img={product.imageUrl}
                name={product.name}
                shortdesc={product.shortDescription}
                rating={product.ratings.avgRating}
                totalReviews={product.ratings.totalReviews}
                key={product.id}
                id={product.id}
                addToCart={this.props.dispatchers.addToCart}
                cart={this.props.cart.cart}
                products={this.props.products.products}
                productDetail={this.props.dispatchers.productDetail}
                disabled={product.disabled}
                disableButton={this.props.dispatchers.disableButton}
              />
            ))
          )
        ) : (
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        )}
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart,
    categories: state.categories
  };
};

let mapDisptachToProps = (dispatch, getState) => {
  return {
    dispatchers: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Products);
