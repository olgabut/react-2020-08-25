import { normalizedRestaurants } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW:
      const { restaurantId, reviewId } = payload.newReview;
      const restaurant = Object.assign({}, restaurants[restaurantId]);
      restaurant.reviews.push(reviewId);
      return {
        ...restaurants,
        [restaurantId]: restaurant,
      };
    default:
      return restaurants;
  }
};
