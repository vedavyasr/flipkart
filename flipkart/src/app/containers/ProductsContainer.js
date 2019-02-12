//Vedavyas
import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Home from "../components/Home";

let mapStateToProps = state => {
  let topSellingProducts = [];
  let i = 0;
  state.products.products.map(top =>
    ++i < 5 ? topSellingProducts.push(top) : null
  );
  return {
    topSellingProducts: topSellingProducts,
    products: state.products.products,
    productsByCategory: state.categories.productsByCategory,
    isFetching: state.products.isFetching,
    error: state.products.error,
    cart: state.cart.cart
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
)(Home);
