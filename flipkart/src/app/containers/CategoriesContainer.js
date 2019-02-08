import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Categories from "../components/Categories";

let mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    isFetching: state.categories.isFetching,
    error: state.categories.error,
    productsByCategory: state.categories.productsByCategory
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
