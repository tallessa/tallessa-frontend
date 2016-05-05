import { connect } from 'react-redux';
import { toggleDrawer } from '../actions';

import Header from '../components/Header';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onLeftButtonClick: () => dispatch(toggleDrawer()),
});


const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);


export default NavigationContainer;
