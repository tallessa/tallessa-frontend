import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';

import DataTable from './DataTable';
import {selectItem} from '../modules/item';


// TODO perhaps move to state
const fields = [
  {
    name: 'name',
    title: 'Name',
  },
];


@connect(
  state => ({
    stuff: state.tallessa.get('stuff'),
    item: state.tallessa.get('item'),
  }),
  {
    selectItem,
  }
)
export default class StuffList extends React.Component {
  static propTypes = {
    stuff: ImmutablePropTypes.list.isRequired,
    item: ImmutablePropTypes.map,
    selectItem: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    // TODO How to avoid this
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(selectedRows) {
    const {selectItem, stuff} = this.props; // eslint-disable-line no-shadow
    const selectedIndex = selectedRows[0];

    console.log('StuffList', 'selectItem', selectedIndex);

    if (typeof selectedIndex !== 'undefined') {
      return selectItem(stuff.get(selectedIndex));
    } else {
      return selectItem(null);
    }
  }

  render() {
    const {stuff} = this.props; // eslint-disable-line no-shadow

    return (
      <Paper>
        <DataTable fields={fields} items={stuff} onRowSelection={this.selectItem} />
      </Paper>
    );
  }
}
