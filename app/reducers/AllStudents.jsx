import axios from 'axios';

//ACTION TYPES 
const FETCH_ALL_STUDENTS = 'FETCH_ALL_STUDENTS';
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';


//ACTION CREATORS 
export function fetchAllStudents(allStudents){
  const action = {type:FETCH_ALL_STUDENTS, allStudents}
  return action;
}

export const createNewStudent = newStudent =>  ({type:CREATE_NEW_STUDENT, newStudent});

export const deleteOneStudent = studentId => ({type:DELETE_STUDENT, studentId})

// REDUCER 
export default function fetchAllCampusesReducer (state=[], action) {
  switch(action.type) {
    case FETCH_ALL_STUDENTS: return action.allStudents;
    case CREATE_NEW_STUDENT: return [...state, action.newStudent];
    case DELETE_STUDENT: return state.filter(student => student.id !== action.studentId);
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

export function createStudent(formInput){
  return function thunk (dispatch){
    return axios.post('/api/student', formInput)
    .then ( newStudent => {
      const action = createNewStudent(newStudent.data);
      dispatch(action);
    }) 
  }
}

export function deleteStudent(studentId){
  return function thunk (dispatch){
    return axios.delete(`/api/student/${studentId}`)
    .catch(console.error);
  }
}