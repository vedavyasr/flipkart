//Vedavyas
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
import proptypes from "prop-types";
let ProductCard = props => (
  <div className="col-sm-6 col-md-4 col-lg-3">
    <Card
      onClick={() => {
        props.productDetail(props.product.id);
        props.history.push(`${"/products/:" + props.product.id}`);
      }}
      style={{ cursor: "pointer" }}
    >
      <CardImg src={props.product.imageUrl} alt={props.product.name} />
      <CardBody>
        <CardTitle>{props.product.name}</CardTitle>
        <StarRatingComponent rating={props.product.ratings.avgRating} />
        <CardText>{props.product.shortDescription}</CardText>
        <ButtonGroup>
          <Button
            className="buyNowBtn"
            // disabled={props.product.disabled}
            onClick={e => {
              e.stopPropagation();
              props.disableButton(props.product.id);
              props.history.push("/checkout");
            }}
          >
            Buy Now
          </Button>
          <AddToCartButton
            className="cartBtn"
            disableButton={props.disableButton}
            disabled={props.product.disabled}
            id={props.product.id}
          />
        </ButtonGroup>
      </CardBody>
    </Card>
  </div>
);

ProductCard.proptypes = {
  product: proptypes.object.isRequired
};

export default withRouter(ProductCard);
