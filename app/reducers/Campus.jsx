import axios from 'axios';

//ACTION TYPES 
const SET_CAMPUS = 'SET_CAMPUS';

//ACTION CREATORS 
export function setSelectedCampus(campus){
  const action = {type:SET_CAMPUS, campus}
  return action;
}
// REDUCER 
export default function setCampusReducer(state= {}, action) {
  switch(action.type) {
    case SET_CAMPUS: return action.campus;
    default:
      return state;
  }
}

// // THUNK 
export function setCampus(campusId){
  return function thunk (dispatch){
    return axios.get(`/api/campus/${campusId}`)
    .then (res => res.data)
    .then (campus => {
      const action = setSelectedCampus(campus);
      dispatch(action);
    })
  }
}
