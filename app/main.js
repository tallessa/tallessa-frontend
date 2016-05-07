import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import httpClient from './http';
import createStore from './store';
import getRoutes from './routes';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const client = httpClient();
const store = createStore(browserHistory, client, {});

const history = syncHistoryWithStore(browserHistory, store);

// won't be needed since can't use immutable in root state
// , {
//   selectLocationState: (state) => state.routing.toJS()
// });

const renderAsyncConnect = (props) =>
  <ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} />;

let DevTool = <div />;
if (__DEVELOPMENT__ && !window.devToolsExtension) {
  DevTool = require('./DevTool'); // eslint-disable-line global-require
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router render={renderAsyncConnect} history={history}>
        {getRoutes(store)}
      </Router>
      {DevTool}
    </div>
  </Provider>,
  document.getElementById('root')
);
