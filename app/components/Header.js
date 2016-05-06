import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {blue500} from 'material-ui/lib/styles/colors';

import {toggleDrawer} from '../actions';
import Breadcrumb from './Breadcrumb';
import Gravatar from './Gravatar';


const defaultAppBarColor = blue500;


const Header = ({onLeftButtonClick, currentViewColor}) => (
  <AppBar
    title={<Breadcrumb />}
    style={{
      backgroundColor: currentViewColor || defaultAppBarColor,
    }}
    iconElementLeft={
      <IconButton onClick={onLeftButtonClick}>
        <MenuIcon />
      </IconButton>
    }
    iconElementRight={<Gravatar />}
  />
);


Header.propTypes = {
  onLeftButtonClick: PropTypes.func.isRequired,
  currentViewColor: PropTypes.string,
};


const mapStateToProps = state => ({
  currentViewColor: state.currentView.color,
});

const mapDispatchToProps = dispatch => ({
  onLeftButtonClick: () => dispatch(toggleDrawer()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
