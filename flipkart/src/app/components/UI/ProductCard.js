import React from "react";
import StarRatingComponent from "./StarRating";
import { withRouter } from "react-router-dom";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody
} from "reactstrap";
import AddToCartButton from "./AddToCartButton";

let ProductCard = props => (
  <div className="col-sm-6 col-md-4 col-lg-3">
    <Card
      onClick={() => {
        props.productDetail(props.id);
        props.history.push(`${"/products/:" + props.id}`);
      }}
      style={{ cursor: "pointer" }}
    >
      <CardImg src={props.img} alt={props.name} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <StarRatingComponent rating={props.rating} />
        <CardText>{props.shortdesc}</CardText>
        <Button
          onClick={e => {
            e.stopPropagation();
            props.history.push("/checkout");
          }}
        >
          Buy Now
        </Button>
        <AddToCartButton
          disableButton={props.disableButton}
          addToCart={props.addToCart}
          disabled={props.disabled}
          id={props.id}
        />
      </CardBody>
    </Card>
  </div>
);

export default withRouter(ProductCard);
