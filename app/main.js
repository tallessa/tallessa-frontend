import createLogger from 'redux-logger';
import injectTapEventPlugin from 'react-tap-event-plugin';
import promise from 'redux-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './components/App';
import Dashboard from './components/Dashboard';
import Loans from './components/Loans';
import Places from './components/Places';
import Settings from './components/Settings';
import Stuff from './components/Stuff';
import reducers from './reducers';
import styles from './styles/index.css';
import './actions';


// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


const
  logger = createLogger(),
  store = createStore(
    reducers,
    applyMiddleware(thunk, promise, logger)
  ),
  history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="stuff" component={Stuff} />
        <Route path="places" component={Places} />
        <Route path="loans" component={Loans} />
        <Route path="settings" component={Settings} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
