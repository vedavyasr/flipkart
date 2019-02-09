import React from "react";
import StarRatingComponent from "./StarRating";
import { withRouter } from "react-router-dom";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  ButtonGroup
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
        <ButtonGroup>
          <Button
            className="buyNowBtn"
            onClick={e => {
              console.log(props, "in bynwo");
              e.stopPropagation();

              props.disableButton(props.id);
              props.history.push("/checkout");
            }}
          >
            Buy Now
          </Button>
          <AddToCartButton
            className="cartBtn"
            disableButton={props.disableButton}
            disabled={props.disabled}
            id={props.id}
          />
        </ButtonGroup>
      </CardBody>
    </Card>
  </div>
);

export default withRouter(ProductCard);
