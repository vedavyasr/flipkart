import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { withRouter } from "react-router-dom";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  CardColumns
} from "reactstrap";

let ProductCard = props => (
  <CardColumns>
    <Card>
      <CardImg src={props.img} alt={props.name} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <StarRatingComponent name="rate1" starCount={5} value={props.rating} />
        <CardText>{props.shortdesc}</CardText>
        <Button
          onClick={() => {
            props.history.push("/checkout");
          }}
        >
          Buy Now
        </Button>

        <Button
          onClick={() => {
            props.addToCard(props.id);
          }}
        >
          + Cart
        </Button>
      </CardBody>
    </Card>
  </CardColumns>
);

export default withRouter(ProductCard);
