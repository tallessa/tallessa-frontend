import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withRouter } from 'react-router';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import colors from '../styles/colors';
import icons from '../styles/icons';


// TODO Tooltips https://github.com/callemall/material-ui/issues/2230

const styleSheet = createStyleSheet('SpeedDial', () => ({
  root: {
    position: 'absolute',
    right: '20px',
    bottom: '20px',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  stuff: {
    backgroundColor: colors.stuff,
  },
  places: {
    backgroundColor: colors.places,
    marginBottom: '10px',
  },
  loans: {
    backgroundColor: colors.loans,
    marginBottom: '10px',
  },
}));


const SpeedDial = ({ onAddPlaceClick, onAddLoanClick, classes }) => (
  <div className={classes.root}>
    {/* Add stuff */}
    <Button fab onClick={() => this.props.history.push('/stuff/new')} className={classes.stuff}>
      {icons.stuff}
    </Button>

    {/* Add place */}
    <Button fab onClick={onAddPlaceClick} className={classes.places}>{icons.places}</Button>

    {/* Add loan */}
    <Button fab onClick={onAddLoanClick} className={classes.loans}>{icons.loans}</Button>
  </div>
);


SpeedDial.propTypes = {
  classes: PropTypes.object.isRequired,
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
  mapDispatchToProps,
)(withRouter(withStyles(styleSheet)(SpeedDial)));
