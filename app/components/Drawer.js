import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';
import DashboardIcon from 'material-ui/lib/svg-icons/action/dashboard';
import SettingsIcon from 'material-ui/lib/svg-icons/action/settings';
import PowerSettingsNewIcon from 'material-ui/lib/svg-icons/action/power-settings-new';

import colors from '../styles/colors';
import icons from '../styles/icons';
import {signOut} from '../actions';
import DrawerItem from './DrawerItem';


const Drawer = ({isOpen, onSignOutClick}) => (
  <LeftNav
    open={isOpen}
    style={{
      marginTop: 64,
    }}
  >
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
  </LeftNav>
);


Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  isOpen: state.ui.drawer,
});

const mapDispatchToProps = dispatch => ({
  onSignOutClick: () => dispatch(signOut()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
