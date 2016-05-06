import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';
import DashboardIcon from 'material-ui/lib/svg-icons/action/dashboard';
import SettingsIcon from 'material-ui/lib/svg-icons/action/settings';
import PowerSettingsNewIcon from 'material-ui/lib/svg-icons/action/power-settings-new';

import go from '../helpers/go';
import colors from '../styles/colors';
import icons from '../styles/icons';
import {signOut} from '../actions';
import DrawerItem from './DrawerItem';


const Drawer = ({isOpen, signOut}) => (
  <LeftNav
    open={isOpen}
    style={{
      position: 'absolute',
      top: '64px',
    }}
  >
    <DrawerItem
      path='/'
      icon={<DashboardIcon />}
      title='Dashboard'
      strictMatch
    />

    <Divider />

    <DrawerItem
      path='/stuff'
      icon={icons.stuff}
      color={colors.stuff}
      title='Stuff'
    />

    <DrawerItem
      path='/places'
      icon={icons.places}
      color={colors.places}
      title='Places'
    />

    <DrawerItem
      path='/loans'
      icon={icons.loans}
      color={colors.loans}
      title='Loans'
    />

    <Divider />

    <DrawerItem
      path='/settings'
      icon={<SettingsIcon />}
      title='Settings'
    />

    <MenuItem
      rightIcon={<PowerSettingsNewIcon />}
      onClick={signOut}
    >
      Sign out
    </MenuItem>
  </LeftNav>
);


Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  isOpen: state.elements.drawer,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
