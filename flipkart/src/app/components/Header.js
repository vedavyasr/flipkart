import React, { PureComponent } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Link from "./UI/NavLink";
import { connect } from "react-redux";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
class Header extends PureComponent {
  componentWillMount() {
    window.sessionStorage.clear();
  }
  render() {
    console.log(this.props, "in compoie");
    return (
      <div>
        <Nav tabs>
          <Nav className="ml-left nav">
            <Link url="/" title="Home" />
            <Link url="/categories" title="Categories" />
            <Link url="/products" title="Products" />
            <Link url="/cart" title="Cart" />
            <Link url="/checkout" title="Checkout" />
          </Nav>

          {!this.props.loggedIn ? (
            <Nav className="ml-auto nav">
              <Link url="/login" title="Login" login={this.props.loggedIn} />
            </Nav>
          ) : (
            <Nav className="registerBtn">
              <h2>Welcome User!</h2>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.props.dispatchers.logout();
                  }}
                >
                  Logout!
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Nav>
      </div>
    );
  }
}
let mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn
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
)(Header);
