import React from 'react';

function Review(props) {
  return (
    <div>
      <h4>{props.review.user}</h4>
      <p>Review: {props.review.rating}</p>
      <p>{props.review.text}</p>
    </div>
  );
}

export default Review;
