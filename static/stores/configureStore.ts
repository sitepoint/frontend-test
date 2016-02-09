/// <reference path="../../typings/main.d.ts" />

import { createStore, applyMiddleware } from 'redux';
const thunk = require('redux-thunk');
import counterReducer from '../reducers/counterReducer';

const finalCreateStore = applyMiddleware(thunk)(createStore);

export default () => {
  return finalCreateStore(counterReducer);
}
