import {asyncConnect} from 'redux-connect';
import {connect} from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, {PropTypes} from 'react';

import Editor from './Editor';
import {getItem, createItem, updateItem, deleteItem} from '../modules/item';


const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
  },
};


@asyncConnect([{
  promise: ({params: {itemSlug}, store}) => store.dispatch(getItem(itemSlug)),
}])
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

    return (
      <div>
        <p>{item.get('name')}</p>
        <Editor
          model={item}
          schema={schema}
          onCreate={createItem}
          onUpdate={updateItem}
          onDelete={deleteItem}
        />
      </div>
);
  }
}
