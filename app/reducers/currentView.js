import {LOCATION_CHANGE} from 'react-router-redux';

import colors from '../styles/colors';


const
  unknownView = {
    prefix: null,
    viewTitle: null,
    color: null,
  },
  knownViews = [
    {
      prefix: '/stuff',
      viewTitle: 'Stuff',
      color: colors.stuff,
    },
    {
      prefix: '/places',
      viewTitle: 'Places',
      color: colors.places,
    },
    {
      prefix: '/loans',
      viewTitle: 'Loans',
      color: colors.loans,
    },
    {
      prefix: '/settings',
      viewTitle: 'Settings',
      color: null,
    },
  ];


export default function currentView(state, action) {
  if (typeof state === 'undefined') return unknownView;
  if (action.type !== LOCATION_CHANGE) return state;

  const
    {payload} = action,
    {pathname} = payload;

  for (const view of knownViews) {
    if (pathname.indexOf(view.prefix) === 0) return view;
  }

  return unknownView;
}
