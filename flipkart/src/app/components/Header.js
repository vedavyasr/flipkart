import React, { PureComponent } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Link from "./NavLink";
import { connect } from "react-redux";
class Header extends PureComponent {
  componentWillMount() {
    window.sessionStorage.clear();
  }
  render() {
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
              <Link url="/login" title="Login" />
            </Nav>
          ) : (
            <Nav className="registerBtn">
              <h2>Welcome User!</h2>
              <NavItem>
                <NavLink style={{ cursor: "pointer" }} href="/login">
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
export default connect(mapStateToProps)(Header);
