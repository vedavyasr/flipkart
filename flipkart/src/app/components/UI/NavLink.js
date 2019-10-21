
import React from "react";
import { NavItem, NavLink } from "reactstrap";
import { withRouter } from "react-router-dom";
import proptypes from "prop-types";
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

Navlink.proptypes = {
  title: proptypes.string.isRequired
};

export default withRouter(Navlink);
