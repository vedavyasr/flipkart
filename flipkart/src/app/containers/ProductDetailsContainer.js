//Vinosh
import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import ProductDetail from "../components/ProductDetail";

let mapStateToProps = state => {
  return {
    productDetail: state.products.productDetail
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
)(ProductDetail);
