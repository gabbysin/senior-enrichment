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

  componentDidMount(){
    store.dispatch(setStudent(this.props.match.params.studentId));
  }

  render(){
    const currentStudent = this.props.selectedStudent;
    const allCampuses = this.props.allCampuses;
    if (currentStudent.campus){ 
      return (
        <div>
          <div><img src={currentStudent.campus.img} style={{width: "200px"}} /> </div>
          <br />
          <h3>Edit Student: {currentStudent.name}</h3>
          <br />
          <div>
            <form >
              <div >
                <label style={{paddingRight:"10px"}}>Student Name:</label>
                <input 
                  type="text"
                  name="studentName"
                  defaultValue={currentStudent.name}
                  />
              </div>
              <div>
              <label style={{paddingRight:"10px"}}>Student Email:</label>
                <input 
                  type="text"
                  name="studentEmail"
                  defaultValue={currentStudent.email}
                  />
              </div>
              <div>
              <label style={{paddingRight:"10px"}}>Campus:</label>
                <select value={currentStudent.campus.name}> 
                  {
                    allCampuses && allCampuses.map( campus =>{
                      return (
                        <option 
                          key={campus.id}
                          value={campus.name}
                          >
                          {campus.name}
                        </option>
                      )
                    })
                  }
                </select>
              </div>
              <div >
                <button type="submit">Edit Student Info</button>
              </div>
            </form>
          </div>
        </div>
      )
    } else return (<div></div>)
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
    },
    editStudent: function(editInput){
      dispatch(editStudent(editInput))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);