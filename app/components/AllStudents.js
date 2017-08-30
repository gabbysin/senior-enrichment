import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchStudents} from '../reducers';

function AllStudents(props){
  const { allStudents } = props;
  return (
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
              <td>{ student.id }</td>
              <td>
                <span>{ student.name }</span>
              </td>
              <td>{ student.campusId }</td>
              <td>
              <button >
                <span ></span>
              </button>
            </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )

} 

const mapStateToProps = function(state){
  return {
    allStudents: state.allStudents
  };
}


export default connect(mapStateToProps)(AllStudents);
