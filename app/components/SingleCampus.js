import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchCampus } from '../reducers';

function SingleCampus(props){
  const campus = props.selectedCampus;
  const allStudents = props.allStudents;
  return (
    <div>
      <h1>{campus.name}</h1>
      <ul>
        <li>1-Student Name</li>
      </ul>
    </div>
  )
}

const mapStateToProps = function(state){
  return {
    selectedCampus: state.selectedCampus,
    allStudents: state.allStudents
  };
}


export default connect(mapStateToProps)(SingleCampus);
