import React from "react";
import StarRatingComponent from "react-star-ratings";
import proptypes from "prop-types";

// export default props => (

let StarRating = props => (
  <StarRatingComponent
    name="rating"
    starRatedColor="blue"
    numberOfStars={5}
    rating={props.rating}
    starDimension="20px"
  />
);

StarRating.propTypes = {
  rating: proptypes.number.isRequired
};

export default StarRating;
