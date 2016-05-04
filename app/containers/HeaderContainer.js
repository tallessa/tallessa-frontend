import { connect } from 'react-redux';
import { toggleDrawer } from '../actions';

import Header from '../components/Header';


const mapStateToProps = (state, ownProps) => {
  return {
    navigationOpen: state.elements.navigation,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLeftButtonClick: () => dispatch(toggleDrawer())
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);


export default NavigationContainer;
