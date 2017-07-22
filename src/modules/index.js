import { combineReducers } from 'redux-immutablejs';

import config from './config';
import currentView from './currentView';
import item from './item';
import stuff from './stuff';
import ui from './ui';


export default combineReducers({
  ui,
  config,
  currentView,
  item,
  stuff,
});
