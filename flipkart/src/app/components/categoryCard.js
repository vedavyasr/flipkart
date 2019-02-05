import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

export default props => (
  <Card>
    <CardImg src={props.img} alt={props.name} />
    <CardBody>
      <CardTitle>{props.name}</CardTitle>
      <Button>More</Button>
    </CardBody>
  </Card>
);
