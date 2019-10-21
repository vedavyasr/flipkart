import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import Login from "../components/Login";

let mapStateToProps = state => {
  return {
    logged: state.login.loggedIn
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
)(Login);
