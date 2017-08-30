import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import selectedNav from './Navbar';
import allCampuses from './AllCampuses';
import allStudents from './Students';
import selectedCampus from './Campus';
import newStudentNameEntry from './NewStudentForm'


const rootReducer = combineReducers({
  selectedNav: selectedNav,
  allCampuses: allCampuses,
  allStudents: allStudents,
  selectedCampus: selectedCampus,
  newStudentNameEntry: newStudentNameEntry
});

export default rootReducer;
export * from './Navbar';
export * from './AllCampuses';
export * from './Students';
export * from './Campus';
export * from './NewStudentForm';
