import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

export default props => (
  <FormGroup>
    <Label>{props.label}:</Label>
    <Input
      type={props.type}
      name={props.name}
      onChange={event => {
        props.changeHandle(event);
      }}
    />
  </FormGroup>
);
