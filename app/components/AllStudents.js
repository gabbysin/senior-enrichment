import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchStudents, deleteStudent } from '../reducers';

function AllStudents(props){
  const { allStudents } = props;
  return (
    <div>
      <br />
      <br />
      <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>#</th>
          <th>Name</th>
          <th>Campus</th>
        </tr>
      </thead>
      <tbody>
        {
          allStudents && allStudents.map(student => (
            <tr key={student.id}>
              <td><span>{ student.id }</span></td>
              <td>
                <span><Link to={`/student/${student.id}`}>{ student.name }</Link></span>
              </td>
              <td><span><Link to={`/campus/${student.campusId}`}>{ student.campus.name }</Link></span></td>
              <td>
              <button onClick={props.handleDelete} className="btn btn-default" value={student.id}> X
              </button>
            </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <br />
    <br />
    <div>
      <NavLink
        to={'/student/new-student-form'}>
          <button>Add New Student</button>
      </NavLink>
    </div>
  </div>
  )
}


const mapStateToProps = function(state){
  return {
    allStudents: state.allStudents
  };
}

const mapDispatchToProps = function(dispatch, studentId){
  return {
    handleDelete: function(event){
      dispatch(deleteStudent(event.target.value));
      dispatch(fetchStudents())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
