import axios from 'axios';

//ACTION TYPES 
const FETCH_ALL_STUDENTS = 'FETCH_ALL_STUDENTS';

//ACTION CREATORS 
export function fetchAllStudents(allStudents){
  const action = {type:FETCH_ALL_STUDENTS, allStudents}
  return action;
}
// REDUCER 
export default function fetchAllCampusesReducer (state= [], action) {
  switch(action.type) {
    case FETCH_ALL_STUDENTS: return action.allStudents;
    default:
      return state;
  }
}

// THUNK 
export function fetchStudents(){
  return function thunk (dispatch){
    return axios.get('/api/student')
    .then (res => res.data)
    .then (students => {
      const action = fetchAllStudents(students);
      dispatch(action);
    })
  }
}
