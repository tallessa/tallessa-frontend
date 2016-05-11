import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {blue500} from 'material-ui/lib/styles/colors';

import config from '../config';
import TeamAvatar from './TeamAvatar';
import UserAvatar from './UserAvatar';
import {toggleDrawer} from '../modules/ui';


const defaultAppBarColor = blue500;


const Header = ({onLeftButtonClick, currentViewColor, currentViewTitle}) => (
  <AppBar
    title={currentViewTitle || config.app.name}
    style={{
      backgroundColor: currentViewColor || defaultAppBarColor,
    }}
    iconElementLeft={
      <IconButton onClick={onLeftButtonClick}>
        <MenuIcon />
      </IconButton>
    }
    iconElementRight={
      <div>
        <TeamAvatar />
        <UserAvatar />
      </div>
    }
  />
);


Header.propTypes = {
  onLeftButtonClick: PropTypes.func.isRequired,
  currentViewColor: PropTypes.string,
  currentViewTitle: PropTypes.string,
};


const mapStateToProps = state => ({
  currentViewColor: state.tallessa.getIn(['currentView', 'color']),
  currentViewTitle: state.tallessa.getIn(['currentView', 'viewTitle']),
});

const mapDispatchToProps = dispatch => ({
  onLeftButtonClick: () => dispatch(toggleDrawer()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
