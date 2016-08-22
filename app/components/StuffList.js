import ImmutablePropTypes from 'react-immutable-proptypes';
import Paper from 'material-ui/Paper';
import React, {PropTypes} from 'react';
import {asyncConnect} from 'redux-connect';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import DataTable from './DataTable';
import {selectItem} from '../modules/item';
import {getStuff} from '../modules/stuff';


// TODO perhaps move to state
const fields = [
  {
    name: 'name',
    title: 'Name',
  },
];


@asyncConnect([{
  promise: ({store}) => store.dispatch(getStuff()),
}])
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
    stuff: ImmutablePropTypes.list,
    item: ImmutablePropTypes.map,
    selectItem: PropTypes.func,
  }

  handleRowClick(selectedItem) {
    if (selectedItem) {
      browserHistory.push(`/stuff/${selectedItem.get('slug')}`);
    }
  }

  render() {
    const {stuff, item} = this.props;

    return (
      <Paper>
        <DataTable
          fields={fields}
          items={stuff}
          selectedItem={item}
          onRowSelection={this.handleRowClick}
        />
      </Paper>
    );
  }
}
