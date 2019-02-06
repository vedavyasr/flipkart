import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Categories from "../components/Categories";

let mapStateToProps = state => {
  console.log(state," in cate");
  
  return {
    categories: state.categories.categories,
    isFetching: state.categories.isFetching,
    error: state.categories.error
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
