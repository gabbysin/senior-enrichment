import axios from 'axios';

//ACTION TYPES 
const FETCH_CAMPUS = 'FETCH_CAMPUS';

//ACTION CREATORS 
export function fetchSingleCampus(campus){
  const action = {type:FETCH_CAMPUS, campus}
  return action;
}
// REDUCER 
export default function fetchCampusReducer (state= {}, action) {
  switch(action.type) {
    case FETCH_CAMPUS: return action.campus;
    default:
      return state;
  }
}

// THUNK 
export function fetchCampus(){
  return function thunk (dispatch){
    return axios.get('/api/campus/:campusId')
    .then (res => res.data)
    .then (campuses => {
      const action = fetchSingleCampus(campus);
      dispatch(action);
    })
  }
}
