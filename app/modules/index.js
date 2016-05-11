import { combineReducers } from 'redux-immutablejs';

import ui from './ui';
import config from './config';
import currentView from './currentView';
import stuff from './stuff';


export default combineReducers({
  ui,
  config,
  currentView,
  stuff,
});
