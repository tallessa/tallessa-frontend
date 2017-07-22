import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Editor from './Editor';
import { getItem, createItem, updateItem, deleteItem, newItem } from '../modules/item';


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


class ItemEditor extends React.Component {
  static propTypes = {
    getItem: PropTypes.func,
    model: ImmutablePropTypes.map,
    newItem: PropTypes.func,
    onCreate: PropTypes.func,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    history: PropTypes.history,
  }

  componentDidMount() {
    this.loadItem(this.props.itemSlug);
  }

  componentWillReceiveProps(newProps) {
    this.loadItem(newProps.itemSlug);
  }

  loadItem(itemSlug) {
    if (itemSlug === 'new') return this.props.newItem();
    return this.props.getItem(itemSlug);
  }

  render() {
    const {model} = this.props;

    return (
      <Editor
        name="item"
        schema={schema}
        title={model.get('name') || 'New Item'}
        subtitle={model.get('category') || 'Category of the Item will appear here'}
        onReturn={() => this.props.history.push('/stuff')}
        {...this.props}
      />
    );
  }
}


export default connect(
  state => ({
    model: state.tallessa.get('item'),
  }),
  {
    onCreate: createItem,
    onUpdate: updateItem,
    onDelete: deleteItem,
    getItem,
    newItem,
  }
)(withRouter(ItemEditor));
