import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import MuiDrawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import PowerSettingsNewIcon from 'material-ui/svg-icons/action/power-settings-new';

import colors from '../styles/colors';
import icons from '../styles/icons';
import {signOut} from '../modules/ui';
import DrawerItem from './DrawerItem';


const Drawer = ({isOpen, onSignOutTouchTap}) => (
  <MuiDrawer open={isOpen} containerStyle={{marginTop: 65}}>
    <DrawerItem
      href="/"
      icon={<DashboardIcon />}
      title="Dashboard"
      strictMatch
    />

    <Divider />

    <DrawerItem
      href="/stuff"
      icon={icons.stuff}
      color={colors.stuff}
      title="Stuff"
    />

    <DrawerItem
      href="/places"
      icon={icons.places}
      color={colors.places}
      title="Places"
    />

    <DrawerItem
      href="/loans"
      icon={icons.loans}
      color={colors.loans}
      title="Loans"
    />

    <Divider />

    <DrawerItem
      href="/settings"
      icon={<SettingsIcon />}
      title="Settings"
    />

    <DrawerItem
      icon={<PowerSettingsNewIcon />}
      onTouchTap={onSignOutTouchTap}
      title="Sign out"
    />
  </MuiDrawer>
);


Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSignOutTouchTap: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  isOpen: state.tallessa.getIn(['ui', 'drawer']),
});

const mapDispatchToProps = {
  onSignOutTouchTap: signOut,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
