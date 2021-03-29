import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import { videoMiddleware } from '../middleware';

export const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(videoMiddleware),
  ));
