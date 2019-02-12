//Vinothini
import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Shipping from "../components/Shipping";

let mapStateToProps = state => {
  return {
    shipping: state.shipping,
    total: state.cart.total
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
)(Shipping);
