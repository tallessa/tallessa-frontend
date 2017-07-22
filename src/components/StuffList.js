import ImmutablePropTypes from 'react-immutable-proptypes';
import Paper from 'material-ui/Paper';
import React from 'react';
import PropTypes from 'prop-types';
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


class StuffList extends React.Component {
  static propTypes = {
    stuff: ImmutablePropTypes.list,
    item: ImmutablePropTypes.map,
    selectItem: PropTypes.func,
    getStuff: PropTypes.func,
  }

  handleRowClick(selectedItem) {
    if (selectedItem) {
      this.props.history.push(`/stuff/${selectedItem.get('slug')}`);
    }
  }

  componentDidMount() {
    this.props.getStuff();
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


export default connect(
  state => ({
    stuff: state.tallessa.get('stuff'),
    item: state.tallessa.get('item'),
  }),
  {
    selectItem,
    getStuff,
  }
)(StuffList);
