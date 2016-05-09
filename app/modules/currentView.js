import {LOCATION_CHANGE} from 'react-router-redux';
import Immutable from 'immutable';
import {createReducer} from 'redux-immutablejs';

import colors from '../styles/colors';


const
  unknownView = Immutable.fromJS({
    prefix: null,
    viewTitle: null,
    color: null,
    strictMatch: false,
  }),
  knownViews = Immutable.fromJS([
    {
      prefix: '/',
      viewTitle: 'Dashboard',
      color: null,
      strictMatch: true
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
      color: null,
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
