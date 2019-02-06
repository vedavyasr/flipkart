import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Home from "../components/Home";

let mapStateToProps = state => {
  return {
    products: state.products.products,
    productsByCategory: state.products.productsByCategory,
    isFetching: state.products.isFetching,
    error: state.products.error,
    cart: state.products.cart
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
