import React, {PropTypes} from 'react';
import {asyncConnect} from 'redux-connect';
import {connect} from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

import FailureDialog from './FailureDialog';
import Drawer from './Drawer';
import AppBar from './AppBar';
import MainView from './MainView';
import SpeedDial from './SpeedDial';
import {isConfigLoaded, getConfig} from '../modules/config';
import timings from '../styles/timings';


@asyncConnect([{
  promise: ({store}) => {
    if (!isConfigLoaded(store.getState())) {
      return store.dispatch(getConfig());
    }

    return null;
  },
}])
@connect(state => ({
  failed: state.tallessa.getIn(['config', 'failed']),
  snackbarMessage: state.tallessa.getIn(['ui', 'snackbar']),
}))
export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    store: PropTypes.object,
    failed: PropTypes.bool,
    snackbarMessage: PropTypes.string,
  }

  render() {
    const {children, failed, snackbarMessage} = this.props;

    if (failed) {
      return <FailureDialog />;
    } else {
      return (
        <div>
          <AppBar />
          <Drawer />
          <MainView>{children}</MainView>
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
