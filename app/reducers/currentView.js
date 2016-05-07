import {LOCATION_CHANGE} from 'react-router-redux';

import colors from '../styles/colors';


const
  unknownView = {
    prefix: null,
    viewTitle: null,
    color: null,
    strictMatch: false,
  },
  knownViews = [
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
  ];


export default function currentView(state, action) {
  if (typeof state === 'undefined') return unknownView;
  if (action.type !== LOCATION_CHANGE) return state;

  const
    {payload} = action,
    {pathname} = payload;

  for (const view of knownViews) {
    if (pathname === view.prefix) return view;
    if (!view.strictMatch && pathname.indexOf(view.prefix) === 0) return view;
  }

  return unknownView;
}
