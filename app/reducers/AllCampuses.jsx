import axios from 'axios';

//ACTION TYPES 
const FETCH_ALL_CAMPUSES = 'FETCH_ALL_CAMPUSES';

//ACTION CREATORS 
export function fetchAllCampuses(allCampuses){
  const action = {type:FETCH_ALL_CAMPUSES, allCampuses}
  return action;
}
// REDUCER 
export default function fetchAllCampusesReducer (state= [], action) {
  switch(action.type) {
    case FETCH_ALL_CAMPUSES: return action.allCampuses;
    default:
      return state;
  }
}

// THUNK 
export function fetchCampuses(){
  return function thunk (dispatch){
    return axios.get('/api/campus')
    .then (res => res.data)
    .then (campuses => {
      const action = fetchAllCampuses(campuses);
      dispatch(action);
    })
  }
}
