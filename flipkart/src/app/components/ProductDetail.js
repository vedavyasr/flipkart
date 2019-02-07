import React from "react";
import { Label } from "reactstrap";
import StarRating from "./StarRating";
import AddToCartButton from "./AddToCartButton";
let Productdetails = props => {
  let { productDetail } = props;
  console.log(props, " productdetails");
  return (
    <div>
      <img src={productDetail[0].imageUrl} alt={productDetail[0].name} />
      <Label>
        Description:
        <p>{productDetail[0].longDescription}</p>
      </Label>
      <StarRating rating={productDetail[0].ratings.avgRating} />
      <AddToCartButton
        id={productDetail[0].id}
        addToCart={props.dispatchers.addToCart}
        disableButton={props.dispatchers.disableButton}
      />
      <span>{productDetail[0].views}</span>
      <h3>{productDetail[0].price}</h3>
    </div>
  );
};

export default Productdetails;
