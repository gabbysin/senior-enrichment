import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { selectNav } from '../reducers';

function Navbar (props){
  const navStyle = {
    padding: "20px"
  }
  return (
    <nav style={navStyle}>
      <Link 
        to="/campus"
        onClick={props.handleClick} 
        value="home">
        HOME
      </Link> <span></span>
      <Link 
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
