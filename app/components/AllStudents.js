import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchStudents} from '../reducers';

function AllStudents(props){
  const { allStudents } = props;
  console.log('ALLSTUDENTS:', allStudents)
  return (
    <div>
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
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-remove" /> X
              </button>
            </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    
  </div>
  )

} 

const mapStateToProps = function(state){
  return {
    allStudents: state.allStudents
  };
}


export default connect(mapStateToProps)(AllStudents);
