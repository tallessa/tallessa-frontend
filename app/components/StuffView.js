import React, {PropTypes} from 'react';
import {asyncConnect} from 'redux-connect';
import Paper from 'material-ui/Paper';

import {getStuff} from '../modules/stuff';
import Breakfast from './Breakfast';
import StuffList from './StuffList';
import ItemEditor from './ItemEditor';


@asyncConnect([{
  promise: ({store}) => store.dispatch(getStuff()),
}])
export default class StuffView extends React.Component {
  static propTypes = {
    store: PropTypes.object,
  }

  render() {
    return (
      <div>
        <Breakfast messageKey='stuff.welcome'>This is the Stuff view! Blah blah blablablah blah blah.</Breakfast>
        <StuffList />
        <ItemEditor />
      </div>
    );
  }
}
