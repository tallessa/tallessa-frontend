import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {blue500} from 'material-ui/lib/styles/colors';

import { toggleDrawer } from '../actions';


const Header = ({onLeftButtonClick}) => (
  <AppBar
    title={
      <div style={{lineHeight: '55px'}}>Tallessa<sup style={{fontSize: '13px'}}>BETA</sup></div>
    }
    style={{
      backgroundColor: blue500,
    }}
    iconElementLeft={
      <IconButton onClick={onLeftButtonClick}>
        <MenuIcon />
      </IconButton>
    }
  />
);


Header.propTypes = {
  onLeftButtonClick: PropTypes.func.isRequired,
};


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onLeftButtonClick: () => dispatch(toggleDrawer()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
