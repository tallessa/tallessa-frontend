import { combineReducers } from 'redux-immutablejs';

import ui from './ui';
import config from './config';
import currentView from './currentView';
import routing from './routing';


export default combineReducers({
  ui,
  config,
  currentView,
  routing,
});
