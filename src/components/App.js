import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import { Route } from 'react-router';

import { store } from '..';
import { isConfigLoaded, getConfig } from '../modules/config';
import AppBar from './AppBar';
import Dashboard from './Dashboard';
import Drawer from './Drawer';
import FailureDialog from './FailureDialog';
import ItemEditor from './ItemEditor';
import Loans from './Loans';
import MainView from './MainView';
import Places from './Places';
import Settings from './Settings';
import SpeedDial from './SpeedDial';
import StuffList from './StuffList';
import Team from './Team';
import timings from '../styles/timings';
import User from './User';


class App extends React.Component {
  static propTypes = {
    failed: PropTypes.bool,
    snackbarMessage: PropTypes.string,
    getConfig: PropTypes.func.isRequired,
  }

  static defaultProps = {
    failed: false,
    snackbarMessage: '',
  }

  componentDidMount = () => {
    if (!isConfigLoaded(store.getState())) {
      this.props.getConfig();
    }
  }

  render() {
    const { failed, snackbarMessage } = this.props;

    if (failed) {
      return <FailureDialog />;
    } else {
      return (
        <div>
          <AppBar />
          <Drawer />
          <MainView>
            <Route path="/" component={Dashboard} />
            <Route path="/stuff" component={StuffList} />
            <Route path="/stuff/:itemSlug" component={ItemEditor} />
            <Route path="/places" component={Places} />
            <Route path="/loans" component={Loans} />
            <Route path="/settings" component={Settings} />
            <Route path="/user" component={User} />
            <Route path="/team" component={Team} />
          </MainView>
          <SpeedDial />
          {snackbarMessage ? (
            <Snackbar
              open
              message={snackbarMessage}
              autoHideDuration={timings.snackbarCloseTimeout}
            />
          ) : null}
        </div>
      );
    }
  }
}


export default connect(
  state => ({
    failed: state.tallessa.getIn(['config', 'failed']),
    snackbarMessage: state.tallessa.getIn(['ui', 'snackbar']),
  }),
  {
    getConfig,
  },
)(App);
