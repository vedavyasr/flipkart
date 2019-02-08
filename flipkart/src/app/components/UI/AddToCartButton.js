import React from "react";
import { Button } from "reactstrap";
export default props =>
  props.disabled ? (
    <Button disabled={props.disabled}>Added To Cart</Button>
  ) : (
    <Button className="cartBtn"
      onClick={e => {
        console.log(props.disabled);
        e.stopPropagation();
        props.disableButton(props.id);
        e.target.textContent = "Added To Cart";
        e.target.disabled = "true";
      }}
    >
      + Cart
    </Button>
  );
