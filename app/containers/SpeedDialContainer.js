import {connect} from 'react-redux';
import {addStuff, addPlace, addLoan} from '../actions';

import SpeedDial from '../components/SpeedDial';


const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddStuffClick: () => dispatch(addStuff()),
    onAddPlaceClick: () => dispatch(addPlace()),
    onAddLoanClick: () => dispatch(addLoan()),
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeedDial);


export default NavigationContainer;
