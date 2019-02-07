import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import { withRouter } from "react-router-dom";

let Categorycard = props => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <Card>
        <CardImg src={props.img} alt={props.name} />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <Button
            onClick={() => {
              props.click(props.id);
              props.filter();
              props.history.push("/products");
            }}
          >
            More
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter(Categorycard);
