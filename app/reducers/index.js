import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ui from './ui';
import config from './config';
import currentView from './currentView';


const reducers = combineReducers({
  ui,
  config,
  currentView,
  routing: routerReducer,
});


export default reducers;
