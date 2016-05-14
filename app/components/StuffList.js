import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import DataTable from './DataTable';


// TODO perhaps move to state
const fields = [
  {
    name: 'name',
    title: 'Name',
  },
];


@connect(state => ({
  stuff: state.tallessa.get('stuff'),
  item: state.tallessa.get('item'),
}))
export default class StuffView extends React.Component {
  static propTypes = {
    stuff: PropTypes.object,  // Immutable.List
    item: PropTypes.object,  // Immutable.Map
  }

  render() {
    const {stuff} = this.props;

    return <DataTable fields={fields} items={stuff} />;
  }
}
