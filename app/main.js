import 'isomorphic-fetch';

import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {ReduxAsyncConnect} from 'redux-connect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles/index.css';
import App from './components/App';
import Dashboard from './components/Dashboard';
import initializeStore from './store';
import Loans from './components/Loans';
import muiTheme from './styles/muiTheme';
import Places from './components/Places';
import Settings from './components/Settings';
import StuffList from './components/StuffList';
import ItemEditor from './components/ItemEditor';


// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


const
  store = initializeStore(),
  history = syncHistoryWithStore(browserHistory, store);


// store.dispatch(getConfig());


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router render={(props) => <ReduxAsyncConnect {...props} />} history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard} />
          <Route path="stuff">
            <IndexRoute component={StuffList} />
            <Route path=":itemSlug" component={ItemEditor} />
          </Route>
          <Route path="places" component={Places} />
          <Route path="loans" component={Loans} />
          <Route path="settings" component={Settings} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
