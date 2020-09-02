import React, { useMemo } from 'react';
import Review from './review';
import Rate from './rate';

export default function Reviews(props) {
  const rate = useMemo(
    () =>
      Math.round(
        props.reviews.map((reviews) => reviews.rating).reduce((a, b) => a + b) /
          props.reviews.length
      ),
    [props.reviews]
  );

  return (
    <div>
      <Rate rate={rate} />
      {props.reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
