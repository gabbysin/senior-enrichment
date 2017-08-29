import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { selectNav } from '../reducers/selectedNav';

function Navbar (props){
  return (
    <nav>
      <Link 
        className="btn btn-primary btn-block" 
        to="/campus"
        onClick={props.handleClick} 
        value="home">
        HOME
      </Link> <span></span>
      <Link 
        className="btn btn-primary btn-block" 
        to="/student"
        onClick={props.handleClick} 
        value="students">
        STUDENTS
      </Link>
      <span></span>
  </nav>
  )
} 

const mapStateToProps = function(state){
  return {
    selectedNav: state.selectedNav
  };
}

const mapDispatchToProps = function(dispatch){
  return {
    handleClick: function(event){
      dispatch(selectNav(event.target.value));
    }
  }
}  

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
