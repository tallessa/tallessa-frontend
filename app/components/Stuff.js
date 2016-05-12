import React, {PropTypes} from 'react';
import {asyncConnect} from 'redux-connect';
import {connect} from 'react-redux';

import {getStuff} from '../modules/stuff';


@asyncConnect([{
  key: 'asyncStuff',
  promise: ({store}) => store.dispatch(getStuff()),
}])
@connect(
  (state) => ({
    syncStuff: state.tallessa.get('stuff'),
  })
)
export default class Stuff extends React.Component {
  static propTypes = {
    store: PropTypes.object,
  }

  render() {
    return <div>Stuff</div>;
  }
}
