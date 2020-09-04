import React from 'react';
import Rate from './rate';

function Review(props) {
  return (
    <div>
      <h4>{props.review.user}</h4>
      <Rate rate={props.review.rating} />
      <p>{props.review.text}</p>
    </div>
  );
}

export default Review;
