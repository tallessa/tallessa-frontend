import React, {PropTypes} from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';
import DashboardIcon from 'material-ui/lib/svg-icons/action/dashboard';
import SettingsIcon from 'material-ui/lib/svg-icons/action/settings';
import PowerSettingsNewIcon from 'material-ui/lib/svg-icons/action/power-settings-new';

import colors from '../styles/colors';
import icons from '../styles/icons';


const Drawer = ({isOpen}) => (
  <LeftNav
    open={isOpen}
    style={{
      position: 'absolute',
      top: '64px',
    }}
  >
    <MenuItem rightIcon={<DashboardIcon />}>Dashboard</MenuItem>

    <Divider />

    <MenuItem
      rightIcon={icons.stuff}
      style={{
        borderLeft: `4px solid ${colors.stuff}`,
      }}
    >
      Stuff
    </MenuItem>

    <MenuItem
      rightIcon={icons.places}
      style={{
        borderLeft: `4px solid ${colors.places}`,
      }}
    >
      Places
    </MenuItem>

    <MenuItem
      rightIcon={icons.loans}
      style={{
        borderLeft: `4px solid ${colors.loans}`,
      }}
    >
      Loans
    </MenuItem>

    <Divider />

    <MenuItem rightIcon={<SettingsIcon />}>Settings</MenuItem>
    <MenuItem rightIcon={<PowerSettingsNewIcon />}>Sign out</MenuItem>
  </LeftNav>
);


Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};


export default Drawer;
