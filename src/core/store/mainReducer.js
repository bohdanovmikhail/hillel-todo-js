import { combineReducers } from 'redux';

import todoReducer from './todo';

export const mainReducer = combineReducers({
  todo: todoReducer,
});

