import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Product from "./productCard";

class Products extends Component {
  render() {
    console.log(this.props, "in Products");

    return this.props.products.productsByCategory.length
      ? this.props.products.productsByCategory.map(product => (
          <Product
            img={product.imageUrl}
            name={product.name}
            shortdesc={product.shortDescription}
            rating={product.ratings.avgRating}
            totalReviews={product.ratings.totalReviews}
            key={product.id}
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
            addToCard={this.props.dispatchers.addToCart}
          />
        ));
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
