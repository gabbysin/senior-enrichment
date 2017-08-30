import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers';

function AllCampuses(props){
  const { allCampuses } = props;
  return (
  <div >
    {
      allCampuses.map(campus => (
        <div  key={campus.id}>
          <NavLink to={`/campus/${campus.id}`}>
            <img src={ campus.img } />
            <div >
              <h5>
                <span>{ campus.name }</span>
              </h5>
            </div>
          </NavLink>
        </div>
      ))
    }
  </div>
  )
} 

const mapStateToProps = function(state){
  return {
    allCampuses: state.allCampuses
  };
}


export default connect(mapStateToProps)(AllCampuses);
