import { FAILURE, REQUEST, SUCCESS } from '../constants';

export default (store) => (next) => async (action) => {
  window.store = store; ///DEV ONLY!!!
  if (!action.CallAPI) return next(action);

  const { CallAPI, options, type, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {
    const response = await fetch(CallAPI, options).then((res) => res.json());
    next({ ...rest, type: type + SUCCESS, response });
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error });
  }
};
