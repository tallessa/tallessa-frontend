import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import colors from '../styles/colors';
import icons from '../styles/icons';
import go from '../helpers/go';


// TODO Tooltips https://github.com/callemall/material-ui/issues/2230

const SpeedDial = ({onAddPlaceClick, onAddLoanClick}) => (
  <div
    style={{
      position: 'absolute',
      right: '20px',
      bottom: '20px',
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}
  >
    {/* Add stuff */}
    <FloatingActionButton
      backgroundColor={colors.stuff}
      onClick={go('/stuff/new')}
    >
      {icons.stuff}
    </FloatingActionButton>

    {/* Add place */}
    <FloatingActionButton
      mini
      backgroundColor={colors.places}
      onClick={onAddPlaceClick}
      style={{
        // XXX It feels very wrong to use margin inside flexbox.
        marginBottom: '10px',
      }}
    >
      {icons.places}
    </FloatingActionButton>

    {/* Add loan */}
    <FloatingActionButton
      mini
      onClick={onAddLoanClick}
      backgroundColor={colors.loans}
      style={{
        // XXX It feels very wrong to use margin inside flexbox.
        marginBottom: '10px',
      }}
    >
      {icons.loans}
    </FloatingActionButton>
  </div>
);


SpeedDial.propTypes = {
  onAddPlaceClick: PropTypes.func,
  onAddLoanClick: PropTypes.func,
};


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({  // eslint-disable-line no-unused-vars
  // onAddPlaceClick: () => dispatch(addPlace()),
  // onAddLoanClick: () => dispatch(addLoan()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeedDial);
