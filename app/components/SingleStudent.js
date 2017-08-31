import React from 'react';
import { connect } from 'react-redux';
import { setStudent } from '../reducers';
import { Link } from 'react-router-dom';
import axios from 'axios';
import store from '../store'

class SingleStudent extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    store.dispatch(setStudent(this.props.match.params.studentId));
  }

  render(){
    const currentStudent = this.props.selectedStudent;
    return (
      <div>
        <h1>{currentStudent.name}</h1>
          <div>
            <span><h3></h3></span>
        </div>
      </div>
    )
  }
}
const mapStateToProps = function(state){
  return {
    selectedStudent: state.selectedStudent,
    allCampuses: state.allCampuses
  };
} 

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    setCampus: function(ownProps){
      const studentId = ownProps.match.params.studentId
      dispatch(setCampus(studentId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);