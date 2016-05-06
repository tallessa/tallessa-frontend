import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import elements from './elements';
import config from './config';


const reducers = combineReducers({
  elements,
  config,
  routing: routerReducer,
});


export default reducers;
