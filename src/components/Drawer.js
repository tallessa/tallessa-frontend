import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import MuiDrawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import DashboardIcon from 'material-ui-icons/Dashboard';
import SettingsIcon from 'material-ui-icons/Settings';
import PowerSettingsNewIcon from 'material-ui-icons/PowerSettingsNew';
import List from 'material-ui/List';

import colors from '../styles/colors';
import icons from '../styles/icons';
import {signOut} from '../modules/ui';
import DrawerItem from './DrawerItem';


const Drawer = ({isOpen, onSignOutTouchTap}) => (
  <MuiDrawer docked open={isOpen}>
    <List>
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
    </List>
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
