import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchCampuses, changeCampus } from '../reducers';

function AllCampuses(props){
  const { allCampuses } = props;

  const imgStyle = {
    width: "175px",
  }

  const formStyle = {
    display: "inline-block",
    padding: "40px"
  }

  return (
  <div >
    {
      allCampuses.map(campus => (
        <div  key={campus.id} style={formStyle}>
          <NavLink 
            to={`/campus/${campus.id}`}
            onClick={props.handleSelectCampus}
            >
            <img src={ campus.img }    style={imgStyle}/>
            <div >
              <h5>
                <span>{ campus.name }</ span>
              </h5>
            </div>
          </NavLink>
        </div>
      ))
    }
    <br />
    <br />
    <div>
      <NavLink
        to={'/campus/new-campus-form'}>
          <button>Add New Campus</button>
      </NavLink>
    </div>
  </div>
  )
} 

const mapStateToProps = function(state){
  return {
    allCampuses: state.allCampuses,
    selectedCampus: state.selectedCampus
  };
} 

const mapDispatchToProps = function(dispatch) {
  return {
    handleSelectCampus(event){
      dispatch(fetchCampus())
    }
  }
}



export default connect(mapStateToProps)(AllCampuses);
