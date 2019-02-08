import React from "react";
import { Label } from "reactstrap";
import StarRating from "./UI/StarRating";
import AddToCartButton from "./UI/AddToCartButton";
let Productdetails = props => {
  let { productDetail } = props;
  return (
    <div className="productDetail">
    <div className="float-left"><img src={productDetail[0].imageUrl} alt={productDetail[0].name} /></div>
     <div className="float-left mleft40"><h2>{productDetail[0].name}</h2>
       <p>{productDetail[0].longDescription}</p>
     <StarRating rating={productDetail[0].ratings.avgRating} />     
     <span className="noOfRating">({productDetail[0].views})</span>
     <h3 className="productPrice">Rs.{productDetail[0].price} /-</h3>
     <AddToCartButton
       id={productDetail[0].id}
       addToCart={props.dispatchers.addToCart}
       disableButton={props.dispatchers.disableButton}
       disabled={productDetail[0].disabled}
     />
     </div>
     <div className="clearfix"></div>
   </div>
  );
};

export default Productdetails;
