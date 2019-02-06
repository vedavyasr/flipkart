import React from "react";
import StarRatingComponent from "react-star-rating-component";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  CardColumns
} from "reactstrap";

export default props => (
  <CardColumns>
    <Card style={{ width: "300px" }}>
      <CardImg src={props.img} alt={props.name} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <StarRatingComponent name="rate1" starCount={5} value={props.rating} />
        <CardText>{props.shortdesc}</CardText>
        <Button>Buy Now</Button>
        <Button>+ Cart</Button>
      </CardBody>
    </Card>
  </CardColumns>
);
