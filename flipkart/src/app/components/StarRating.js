import React from 'react';
import StarRatingComponent from "react-star-ratings";

export default (props)=>(
    <StarRatingComponent
    name="rating"
    starRatedColor="blue"
    numberOfStars={5}
    rating={props.rating}
    starDimension="20px"
  />
)