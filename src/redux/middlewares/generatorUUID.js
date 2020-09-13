import { ADDREVIEW } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  if (action.type === ADDREVIEW) {
    if (!action.payload.newReview.reviewID) {
      action.payload.newReview.reviewID = uuidv4();
    }
    if (!action.payload.newReview.userID) {
      action.payload.newReview.userID = uuidv4();
    }
  }
  console.log('action: ', action);
  next(action);
  console.log(store.getState());
};
