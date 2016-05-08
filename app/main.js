import 'isomorphic-fetch';

import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
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
import './styles/index.css';
import {getConfig} from './actions';
import initializeStore from './store';


// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


const
  store = initializeStore(),
  history = syncHistoryWithStore(browserHistory, store);


store.dispatch(getConfig());


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
