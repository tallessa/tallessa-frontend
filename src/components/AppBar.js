import MuiAppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import config from '../config';
import TeamAvatar from './TeamAvatar';
import UserAvatar from './UserAvatar';
import { toggleDrawer } from '../modules/ui';


const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});


const AppBar = ({ onLeftButtonClick, currentViewColor, currentViewTitle, classes }) => (
  <MuiAppBar
    className={classes.root}
    style={{borderTop: `4px solid ${currentViewColor}`, transition: 'border-color 0.25s'}}
    position="static"
    title={currentViewTitle || config.app.name}
  >
    <Toolbar>
      <IconButton onClick={onLeftButtonClick}>
        <MenuIcon />
      </IconButton>
      <Link to="/team"><TeamAvatar /></Link>
      <Link to="/user"><UserAvatar /></Link>
    </Toolbar>
  </MuiAppBar>
);


AppBar.propTypes = {
  onLeftButtonClick: PropTypes.func.isRequired,
  currentViewColor: PropTypes.string,
  currentViewTitle: PropTypes.string,
  classes: PropTypes.object.isRequired,
};


AppBar.defaultProps = {
  currentViewColor: '',
  currentViewTitle: '',
};


const mapStateToProps = state => ({
  currentViewColor: state.tallessa.getIn(['currentView', 'color']),
  currentViewTitle: state.tallessa.getIn(['currentView', 'viewTitle']),
});

const mapDispatchToProps = {
  onLeftButtonClick: toggleDrawer ,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styleSheet)(AppBar));
