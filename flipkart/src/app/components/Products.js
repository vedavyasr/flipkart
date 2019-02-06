import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Product from "./productCard";

class Products extends PureComponent {
  componentWillMount() {
    !(
      this.props.products.productsByCategory.length ||
      this.props.products.products.length
    ) && this.props.dispatchers.fetchProducts();
  }
  render() {
    return (
      <div>
        <h2>Products</h2>
        <hr />
        <h3>Filter:</h3>
        <hr />
        {this.props.products.productsByCategory.length
          ? this.props.products.productsByCategory.map(product => (
              <Product
                img={product.imageUrl}
                name={product.name}
                shortdesc={product.shortDescription}
                rating={product.ratings.avgRating}
                totalReviews={product.ratings.totalReviews}
                key={product.id}
                id={product.id}
                addToCard={this.props.dispatchers.addToCart}
                cart={this.props.products.cart}
                products={this.props.products.products}
              />
            ))
          : this.props.products.products.map(product => (
              <Product
                img={product.imageUrl}
                name={product.name}
                shortdesc={product.shortDescription}
                rating={product.ratings.avgRating}
                totalReviews={product.ratings.totalReviews}
                key={product.id}
                id={product.id}
                addToCard={this.props.dispatchers.addToCart}
                cart={this.props.products.cart}
                products={this.props.products.products}
              />
            ))}
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    products: state.products
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
