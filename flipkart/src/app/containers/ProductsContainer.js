import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Home from "../components/Home";

let mapStateToProps = state => {
  return {
    products: state.products.products,
    isFetching: state.products.isFetching,
    error: state.products.error
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