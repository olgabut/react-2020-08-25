import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middlewares/logger';
import generatorUUID from './middlewares/generatorUUID';

import reducer from './reducer';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(generatorUUID))
);

export default store;
