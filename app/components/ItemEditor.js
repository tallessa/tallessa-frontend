import React from 'react';
import {connect} from 'react-redux';


@connect(
  state => ({
    item: state.tallessa.get('item'),
  }),
  dispatch => ({
    dispatch,
  })
)
export default class ItemEditor extends React.Component {
  render() {
    return <div>Item Editor</div>;
  }
}
