import {connect} from 'react-redux';
import {addStuff, addPlace, addLoan} from '../actions';

import SpeedDial from '../components/SpeedDial';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onAddStuffClick: () => dispatch(addStuff()),
  onAddPlaceClick: () => dispatch(addPlace()),
  onAddLoanClick: () => dispatch(addLoan()),
});


const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeedDial);


export default NavigationContainer;
