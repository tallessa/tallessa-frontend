import {asyncConnect} from 'redux-connect';
import {connect} from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, {PropTypes} from 'react';

import go from '../helpers/go';
import Editor from './Editor';
import {getItem, createItem, updateItem, deleteItem, newItem} from '../modules/item';


const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      placeholder: 'Apple iPhone 6 64GB Space Gray',
    },
  },
};


@asyncConnect([{
  promise: ({params: {itemSlug}, store}) => {
    if (itemSlug === 'new') return store.dispatch(newItem());
    return store.dispatch(getItem(itemSlug));
  },
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

  constructor() {
    super();
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCreate(itemToCreate) {
    const {createItem} = this.props;
    createItem(itemToCreate).then(go('/stuff'));
  }

  handleDelete(itemToDelete) {
    const {deleteItem} = this.props;
    deleteItem(itemToDelete).then(go('/stuff'));
  }

  handleUpdate(itemToUpdate) {
    const {updateItem} = this.props;
    updateItem(itemToUpdate).then(go('/stuff'));
  }

  render() {
    const {item} = this.props;

    return (
      <Editor
        name="item"
        model={item}
        schema={schema}
        title={item.get('name') || 'New Item'}
        subtitle={item.get('category') || 'Category of the Item will appear here'}
        onCreate={this.handleCreate}
        onUpdate={this.handleUpdate}
        onDelete={this.handleDelete}
        onCancel={go('/stuff')}
      />
    );
  }
}
