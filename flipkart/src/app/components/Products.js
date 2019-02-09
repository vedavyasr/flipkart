import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import { Spinner } from "reactstrap";
import Search from "./UI/Search";
import Helper from "./UI/ProductCardHelper";
class Products extends PureComponent {
  componentWillMount() {
    !(
      this.props.categories.productsByCategory.length ||
      this.props.products.products.length
    ) && this.props.dispatchers.fetchProducts();
  }

  render() {
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
          this.props.categories.productsByCategory.length ? (
            this.props.products.searchValue ? (
              <Search
                searchValue={this.props.products.searchValue}
                products={this.props.categories.productsByCategory}
                addToCartDispatcher={this.props.dispatchers.addToCart}
                productDetailDispatcher={this.props.dispatchers.productDetail}
                disableButtonDispatcher={this.props.dispatchers.disableButton}
                cart={this.props.cart.cart}
              />
            ) : (
              <Helper
                products={this.props.categories.productsByCategory}
                addToCartDispatcher={this.props.dispatchers.addToCart}
                productDetailDispatcher={this.props.dispatchers.productDetail}
                disableButtonDispatcher={this.props.dispatchers.disableButton}
                cart={this.props.cart.cart}
              />
            )
          ) : this.props.products.searchValue ? (
            <Search
              searchValue={this.props.products.searchValue}
              products={this.props.products.products}
              addToCartDispatcher={this.props.dispatchers.addToCart}
              productDetailDispatcher={this.props.dispatchers.productDetail}
              disableButtonDispatcher={this.props.dispatchers.disableButton}
              cart={this.props.cart.cart}
            />
          ) : (
            <Helper
              products={this.props.products.products}
              addToCartDispatcher={this.props.dispatchers.addToCart}
              productDetailDispatcher={this.props.dispatchers.productDetail}
              disableButtonDispatcher={this.props.dispatchers.disableButton}
              cart={this.props.cart.cart}
            />
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
