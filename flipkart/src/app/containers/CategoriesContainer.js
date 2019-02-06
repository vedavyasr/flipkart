import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Categories from "../components/Categories";

let mapStateToProps = state => {
  return {
    categories: state.products.categories,
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
)(Categories);
