import axios from 'axios';

//ACTION TYPES 
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT';
const NEW_STUDENT_NAME = 'NEW_STUDENT_NAME';
const NEW_STUDENT_CAMPUS = 'NEW_STUDENT_CAMPUS'

//ACTION CREATORS 
// export function createNewStudent(student){
//   const action = {type:FETCH_ALL_STUDENTS, allStudents}
//   return action;
// }
// REDUCER 
// export default function createNewStudentReducer (state= [], action) {
//   switch(action.type) {
//     case CREATE_NEW_STUDENT: return action.allStudents;
//     default:
//       return state;
//   }
// }

// THUNK 
// export function fetchStudents(){
//   return function thunk (dispatch){
//     return axios.get('/api/student')
//     .then (res => res.data)
//     .then (students => {
//       const action = fetchAllStudents(students);
//       dispatch(action);
//     })
//   }
// }