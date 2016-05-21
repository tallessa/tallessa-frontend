import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Editor from './Editor';
import {createItem, updateItem, deleteItem} from '../modules/stuff';


const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
  },
};


@connect(
  state => ({
    item: state.tallessa.get('item'),
  }),
  {
    createItem,
    updateItem,
    deleteItem,
  }
)
export default class ItemEditor extends React.Component {
  static propTypes = {
    createItem: PropTypes.func,
    deleteItem: PropTypes.func,
    item: ImmutablePropTypes.map,
    schema: PropTypes.array,
    updateItem: PropTypes.func,
  }

  render() {
    const {item, createItem, updateItem, deleteItem} = this.props; // eslint-disable-line no-shadow

    return (<Editor
      model={item}
      schema={schema}
      onCreate={createItem}
      onUpdate={updateItem}
      onDelete={deleteItem}
    />);
  }
}
