import produce from 'immer';
import {
  SEND_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
  CLEAR_ORDER,
} from '../constants';

const initialState = {
  sending: false,
  sent: false,
  error: null,
  entities: {},
};

export default (state = initialState, action) => {
  const { type, response, error } = action;
  switch (type) {
    case SEND_ORDER + REQUEST: {
      return produce(state, (draft) => {
        draft.sending = true;
      });
    }
    case SEND_ORDER + SUCCESS: {
      return produce(state, (draft) => {
        draft.sending = false;
        draft.sent = true;
        draft.error = null;
        draft.entities = { ...draft.entities, ...response };
      });
    }
    case SEND_ORDER + FAILURE: {
      return produce(state, (draft) => {
        draft.sending = false;
        draft.sent = false;
        draft.error = error;
      });
    }
    case CLEAR_ORDER: {
      return initialState;
    }
    default:
      return state;
  }
};
