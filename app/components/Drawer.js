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


const Drawer = ({isOpen, signOut}) => (
  <LeftNav
    open={isOpen}
    style={{
      position: 'absolute',
      top: '64px',
    }}
  >
    <MenuItem
      rightIcon={<DashboardIcon />}
      onClick={go('/')}
    >
      Dashboard
    </MenuItem>

    <Divider />

    <MenuItem
      rightIcon={icons.stuff}
      onClick={go('/stuff')}
      style={{
        borderLeft: `4px solid ${colors.stuff}`,
      }}
    >
      Stuff
    </MenuItem>

    <MenuItem
      rightIcon={icons.places}
      onClick={go('/places')}
      style={{
        borderLeft: `4px solid ${colors.places}`,
      }}
    >
      Places
    </MenuItem>

    <MenuItem
      rightIcon={icons.loans}
      onClick={go('/loans')}
      style={{
        borderLeft: `4px solid ${colors.loans}`,
      }}
    >
      Loans
    </MenuItem>

    <Divider />

    <MenuItem
      rightIcon={<SettingsIcon />}
      onClick={go('/settings')}
    >
      Settings
    </MenuItem>

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
  signOut: PropTypes.func.isRequired
};


export default Drawer;
