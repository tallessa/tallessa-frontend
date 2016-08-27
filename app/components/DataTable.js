import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Immutable from 'immutable';
import {Link} from 'react-router';

import getField from '../helpers/getField';


export default class DataTable extends React.Component {
  static propTypes = {
    items: PropTypes.oneOfType([
      ImmutablePropTypes.iterable,
      PropTypes.array,
    ]),
    selectedItem: PropTypes.oneOfType([
      ImmutablePropTypes.map,
      PropTypes.object,
    ]),
    fields: PropTypes.array.isRequired,
    onRowSelection: PropTypes.func,
  };

  constructor() {
    super();
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(row, col) {
    console.log('selectItem', arguments)
    const {onRowSelection, items} = this.props;

    // Clicking on selection checkbox
    if (col < 0) return;

    if (typeof onRowSelection !== 'undefined') {
      if (typeof row !== 'undefined') {
        onRowSelection(items.get(row));
      } else {
        onRowSelection(null);
      }
    }
  }

  render() {
    const {items, fields, selectedItem} = this.props;

    return (
      <Table multiSelectable>
        <TableHeader>
          <TableRow>
            {fields.map(field => (
              <TableHeaderColumn key={field.name}>{field.title}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map(item => (
            <TableRow key={getField(item, 'slug')} selected={Immutable.is(selectedItem, item)}>
              {fields.map(field => (
                <TableRowColumn key={field.name}>
                  <Link to={`/stuff/${getField(item, 'slug')}`}>{getField(item, field.name)}</Link>
                </TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}
