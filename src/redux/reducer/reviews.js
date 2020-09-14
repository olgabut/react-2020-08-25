import { normalizedReviews } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW:
      const { reviewId, text, rate, userId } = payload.newReview;
      return {
        ...reviews,
        [reviewId]: { id: reviewId, rating: rate, text: text, userId: userId },
      };
    default:
      return reviews;
  }
};
