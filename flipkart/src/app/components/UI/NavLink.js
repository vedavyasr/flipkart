import React from "react";
import { NavItem, NavLink } from "reactstrap";
import { withRouter } from "react-router-dom";
let Navlink = props => (
  <NavItem>
    <NavLink
      style={{ cursor: "pointer" }}
      onClick={() => props.history.push(`${props.url}`)}
    >
      {props.title}
    </NavLink>
  </NavItem>
);

export default withRouter(Navlink);
