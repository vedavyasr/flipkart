import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import { withRouter } from "react-router-dom";

let Categorycard = props => {
  console.log(props, " card categoty");
  return (
    <Card style={{ width: "300px" }}>
      <CardImg src={props.img} alt={props.name} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <Button
          onClick={() => {
            props.click(props.id);
            
            props.history.push("/products");
          }}
        >
          More
        </Button>
      </CardBody>
    </Card>
  );
};

export default withRouter(Categorycard);
