import 'isomorphic-fetch';

import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles/index.css';
import App from './components/App';
import initializeStore, { history } from './store';
import muiTheme from './styles/muiTheme';


// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

export const store = initializeStore();


// store.dispatch(getConfig());


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
