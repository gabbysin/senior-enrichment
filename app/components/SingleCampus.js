import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setCampus } from '../reducers';
import axios from 'axios';
import store from '../store'

class SingleCampus extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    store.dispatch(setCampus(this.props.match.params.campusId));
  }

  render(){
    const selectedCampus = this.props.selectedCampus;
    const selectedStudents = (this.props.allStudents).filter( student => (student.campusId === selectedCampus.id));
    return (
      <div>
        <h1>{selectedCampus.name}</h1>
        <div><img src={selectedCampus.img} /></div>
          <div>
            <ul>
            {
              selectedStudents.map( student => {
                return <li>{student.name}</li>
              })
            }
            </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = function(state){
  return {
    selectedCampus: state.selectedCampus,
    allStudents: state.allStudents
  };
} 

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    setCampus: function(ownProps){
      const campusId = ownProps.match.params.campusId
      dispatch(setCampus(campusId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);

// //{
//   campus.map(student => {
//     return <li key={student.id}>{student.name}</li>
//   })
// }