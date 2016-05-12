import {LOCATION_CHANGE} from 'react-router-redux';
import Immutable from 'immutable';
import {createReducer} from 'redux-immutablejs';
import {white} from 'material-ui/styles/colors';

import colors from '../styles/colors';


const
  defaultColor = white,
  unknownView = Immutable.fromJS({
    prefix: null,
    viewTitle: null,
    color: defaultColor,
    strictMatch: false,
  }),
  knownViews = Immutable.fromJS([
    {
      prefix: '/',
      viewTitle: 'Dashboard',
      color: defaultColor,
      strictMatch: true,
    },
    {
      prefix: '/stuff',
      viewTitle: 'Stuff',
      color: colors.stuff,
      strictMatch: false,
    },
    {
      prefix: '/places',
      viewTitle: 'Places',
      color: colors.places,
      strictMatch: false,
    },
    {
      prefix: '/loans',
      viewTitle: 'Loans',
      color: colors.loans,
      strictMatch: false,
    },
    {
      prefix: '/settings',
      viewTitle: 'Settings',
      color: defaultColor,
      strictMatch: false,
    },
  ]);


export default createReducer(unknownView, {
  [LOCATION_CHANGE]: (state, action) => {
    const
      {payload} = action,
      {pathname} = payload;

    return knownViews.find(
      view => {
        if (pathname === view.get('prefix')) return true;
        return !view.get('strictMatch') && pathname.indexOf(view.get('prefix')) === 0;
      },
      undefined,
      unknownView
    );
  },
});
