import {
  combineReducers
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import selectedNav from './Navbar';
import allCampuses from './AllCampuses';
import selectedCampus from './Campus';
import allStudents from './AllStudents';
import selectedStudent from './Student'


const rootReducer = combineReducers({
  selectedNav: selectedNav,
  allCampuses: allCampuses,
  allStudents: allStudents,
  selectedCampus: selectedCampus,
  selectedStudent: selectedStudent
});

export default rootReducer;
export * from './Navbar';
export * from './AllCampuses';
export * from './Campus';
export * from './AllStudents';
export * from './Student';

