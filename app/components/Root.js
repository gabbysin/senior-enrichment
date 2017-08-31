import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import { NewStudentForm }  from './NewStudentForm';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import { fetchCampuses, fetchStudents } from '../reducers';
import store from '../store'

export default class Root extends Component {
  componentDidMount () {
    const campusesThunk = fetchCampuses();
    const studentThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentThunk);
  }

  render() {    
    return (
      <div>
        <Navbar /> 
        <div>
          <Switch>
            <Route exact path="/campus" component={AllCampuses}/>
            <Route exact path="/student" component={AllStudents}/>
            <Route path="/campus/:campusId" component={SingleCampus}/>
            <Route path="/student/:studentId" component={SingleStudent}/>
            <Route exact path='/student/new-student-form' component={NewStudentForm} />
            <Route exact path ='/' component={AllCampuses} />
          </Switch>
        </div>
      </div>
    )
  }
}