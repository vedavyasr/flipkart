import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Categories from "../components/Categories";

let mapStateToProps = state => {
  return {
    categories: state.categories,
    isFetching: state.isFetching,
    error: state.error
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
