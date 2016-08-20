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


// Support both plain objects and Immutable.Map
function getField(item, fieldName) {
  if (Immutable.Map.isMap(item)) return item.get(fieldName);
  return item[fieldName];
}


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

  selectItem(selectedRows) {
    const {onRowSelection, items} = this.props;
    const selectedIndex = selectedRows[0];

    if (typeof onRowSelection !== 'undefined') {
      if (typeof selectedIndex !== 'undefined') {
        onRowSelection(items.get(selectedIndex));
      } else {
        onRowSelection(null);
      }
    }
  }

  render() {
    const {items, fields, selectedItem} = this.props;

    return (
      <Table onRowSelection={this.selectItem}>
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
                <TableRowColumn key={field.name}>{getField(item, field.name)}</TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}
