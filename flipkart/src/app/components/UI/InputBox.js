
import React from "react";
import { FormGroup, Label } from "reactstrap";

export default props => (
  <FormGroup>
    <Label>{props.label}:</Label>
    <input
      className="form-control"
      required
      type={props.type}
      name={props.name}
      onChange={event => {
        props.changeHandle(event);
      }}
    />
  </FormGroup>
);
