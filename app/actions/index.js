import promiseProps from 'promise-props';

import {getCurrentUser} from '../services/UserService';
import {getCurrentTeam} from '../services/TeamService';


export function toggleDrawer() {
  return {
    type: 'TOGGLE_DRAWER',
  };
}


export function addStuff() {
  return {
    type: 'ADD_STUFF',
  };
}


export function addPlace() {
  return {
    type: 'ADD_PLACE',
  };
}


export function addLoan() {
  return {
    type: 'ADD_LOAN',
  };
}


export function signOut() {
  return {
    type: 'SIGN_OUT',
  };
}


export function getConfig() {
  return {
    type: 'GET_CONFIG',
    payload: promiseProps({
      user: getCurrentUser(),
      team: getCurrentTeam(),
    }),
  };
}
