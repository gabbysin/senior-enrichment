import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import NewStudentForm  from './NewStudentForm';
import NewCampusForm from './NewCampusForm';
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
            <Route exact path="/campus/new-campus-form" component={NewCampusForm}/>
            <Route exact path="/student" component={AllStudents}/>
            <Route exact path="/student/new-student-form" component={NewStudentForm} />
            <Route path="/student/:studentId" component={SingleStudent}/> 
            <Route path="/campus/:campusId" component={SingleCampus}/>            
            <Route exact path ='/' component={AllCampuses} />
          </Switch>
        </div>
      </div>
    )
  }
}