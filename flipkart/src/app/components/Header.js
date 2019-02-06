import React, { Component } from "react";
import { Nav } from "reactstrap";
import NavLink from "./NavLink";
class Header extends Component {
  render() {
    let loggedIn = false;
    return (
      <div>
        <Nav tabs>
          <Nav className="menuBtn">
            <NavLink url="/" title="Home" />
            <NavLink url="/categories" title="Categories" />
            <NavLink url="/products" title="Products" />
            <NavLink url="/cart" title="Cart" />
            <NavLink url="/checkout" title="Checkout" />
          </Nav>

          {!loggedIn ? (
            <Nav className="registerBtn">
              <NavLink url="/login" title="Login" />
              <NavLink url="/register" title="Register" />
            </Nav>
          ) : (
            <Nav className="registerBtn">
              {/* <NavLink url="/login" title="Login" /> */}
              <h2>Welcome Veda!</h2>
              <NavLink url="/logout" title="Logout" />
            </Nav>
          )}
        </Nav>
      </div>
    );
  }
}

export default Header;
