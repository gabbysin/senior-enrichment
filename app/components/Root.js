import React, { Component } from 'react';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import NewStudentForm from './NewStudentForm';
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
            <Route exact path="/student/new-student-form" component={NewStudentForm}/>            
            <Route />
          </Switch>
        </div>
      </div>
    )
  }
}