import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { nprogress } from 'redux-nprogress';
import async from './async';
import leftNav from './leftNav';

const rootReducer = combineReducers({
  routing: routerReducer,
  nprogress,
  async,
  leftNav
});

export default rootReducer;
