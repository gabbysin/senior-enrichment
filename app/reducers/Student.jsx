import axios from 'axios';

//ACTION TYPES 
const SET_STUDENT = 'SET_STUDENT';

//ACTION CREATORS 
export function setSelectedStudent(student){
  const action = {type:SET_STUDENT, student}
  return action;
}
// REDUCER 
export default function setStudentReducer(state= {}, action) {
  switch(action.type) {
    case SET_STUDENT: return action.student;
    default:
      return state;
  }
}

// // THUNK 
export function setStudent(studentId){
  return function thunk (dispatch){
    return axios.get(`/api/student/${studentId}`)
    .then (res => res.data)
    .then (student => {
      const action = setSelectedStudent(student);
      dispatch(action);
    })
  }
}
