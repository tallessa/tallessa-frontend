import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/App';
import Dashboard from './components/Dashboard';
import Loans from './components/Loans';
import Places from './components/Places';
import Settings from './components/Settings';
import Stuff from './components/Stuff';

export default function getRoutes() {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='stuff' component={Stuff} />
      <Route path='places' component={Places} />
      <Route path='loans' component={Loans} />
      <Route path='settings' component={Settings} />
    </Route>
  );
}
