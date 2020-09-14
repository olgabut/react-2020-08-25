import { ADDREVIEW } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  if (action.type === ADDREVIEW) {
    if (!action.payload.newReview.reviewId) {
      action.payload.newReview.reviewId = uuidv4();
    }
    if (!action.payload.newReview.userId) {
      const user = Object.values(store.getState().users).find(
        (user) => user.name === action.payload.newReview.name
      );
      if (user) action.payload.newReview.userId = user.id;
      else action.payload.newReview.userId = uuidv4();
    }
    if (!action.payload.newReview.restaurantId) {
      action.payload.newReview.restaurantId =
        'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2'; //TODO
    }
  }
  console.log('action: ', action);
  console.log('before:', store.getState());
  next(action);
  console.log('after:', store.getState());
};
