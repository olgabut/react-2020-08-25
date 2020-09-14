import { normalizedUsers } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW:
      const { userId, name } = payload.newReview;
      return {
        ...users,
        [userId]: { id: userId, name: name },
      };
    default:
      return users;
  }
};
