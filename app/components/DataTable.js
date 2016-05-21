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


const DataTable = ({items, fields, onRowSelection, selectedItem}) => (
  <Table onRowSelection={onRowSelection}>
    <TableHeader>
      <TableRow>
        {fields.map(field => (
          <TableHeaderColumn key={field.name}>{field.title}</TableHeaderColumn>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {items.map(item => (
        <TableRow key={item.slug} selected={Immutable.is(selectedItem, item)}>
          {fields.map(field => (
            <TableRowColumn key={field.name}>{getField(item, field.name)}</TableRowColumn>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);


DataTable.propTypes = {
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


export default DataTable;
