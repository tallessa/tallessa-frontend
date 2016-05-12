import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import MuiDrawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import PowerSettingsNewIcon from 'material-ui/svg-icons/action/power-settings-new';

import colors from '../styles/colors';
import icons from '../styles/icons';
import {signOut} from '../modules/ui';
import DrawerItem from './DrawerItem';


const Drawer = ({isOpen, onSignOutClick}) => (
  <MuiDrawer open={isOpen} docked containerStyle={{marginTop: 65}}>
    <DrawerItem
      path="/"
      icon={<DashboardIcon />}
      title="Dashboard"
      strictMatch
    />

    <Divider />

    <DrawerItem
      path="/stuff"
      icon={icons.stuff}
      color={colors.stuff}
      title="Stuff"
    />

    <DrawerItem
      path="/places"
      icon={icons.places}
      color={colors.places}
      title="Places"
    />

    <DrawerItem
      path="/loans"
      icon={icons.loans}
      color={colors.loans}
      title="Loans"
    />

    <Divider />

    <DrawerItem
      path="/settings"
      icon={<SettingsIcon />}
      title="Settings"
    />

    <MenuItem
      rightIcon={<PowerSettingsNewIcon />}
      onClick={onSignOutClick}
    >
      Sign out
    </MenuItem>
  </MuiDrawer>
);


Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  isOpen: state.tallessa.getIn(['ui', 'drawer']),
});

const mapDispatchToProps = dispatch => ({
  onSignOutClick: () => dispatch(signOut()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
