import { combineReducers } from 'redux'

//ACTION TYPES 
const SELECTED_NAV = 'SELECTED_NAV';

//ACTION CREATORS 
export function selectNav(selectedNav){
  const action={type:SELECTED_NAV, selectedNav}
  return action;
} 

// REDUCER 
export default function selectedNavReducer (state= '', action) {
  switch(action.type) {
    case SELECTED_NAV: return action.selectedNav;
    default:
      return state;
  }
}