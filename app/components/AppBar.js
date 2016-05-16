import MuiAppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import config from '../config';
import TeamAvatar from './TeamAvatar';
import UserAvatar from './UserAvatar';
import {toggleDrawer} from '../modules/ui';


const AppBar = ({onLeftButtonClick, currentViewColor, currentViewTitle}) => (
  <MuiAppBar
    style={{borderTop: `4px solid ${currentViewColor}`, transition: 'border-color 0.25s'}}
    title={currentViewTitle || config.app.name}
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


AppBar.propTypes = {
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
)(AppBar);
