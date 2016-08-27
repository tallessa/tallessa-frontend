import {asyncConnect} from 'redux-connect';
import {connect} from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, {PropTypes} from 'react';

import go from '../helpers/go';
import Editor from './Editor';
import {getItem, createItem, updateItem, deleteItem, newItem} from '../modules/item';


// TODO auto-generate schema from DRF
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      placeholder: 'Apple iPhone 6 64GB Space Gray',
      maxLength: 255,
    },
    serial_number: {
      type: 'string',
      title: 'Serial number',
      placeholder: 'C00N1234A5BC',
      maxLength: 255,
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
    model: state.tallessa.get('item'),
  }),
  {
    onCreate: createItem,
    onUpdate: updateItem,
    onDelete: deleteItem,
  }
)
export default class ItemEditor extends React.Component {
  static propTypes = {
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    model: ImmutablePropTypes.map,
  }

  render() {
    const {model} = this.props;

    return (
      <Editor
        name="item"
        schema={schema}
        title={model.get('name') || 'New Item'}
        subtitle={model.get('category') || 'Category of the Item will appear here'}
        onReturn={go('/stuff')}
        {...this.props}
      />
    );
  }
}
