import React from 'react';
import { connect } from 'react-redux';
import { createStudent } from '../reducers';

class NewStudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameEntry: '',
      selectedCampus: {}
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleSelectCampus = this.handleSelectCampus.bind(this);
  }

  render(){
    const allCampuses = this.props.allCampuses;
    return (
        <form onSubmit={this.state.handleFormSubmit}>
          <div className="form-group">
            <label>Student Name:</label>
            <input 
              type="text"
              name="studentName"
              value={this.state.nameEntry}
              onChange={this.handleNameInput}
              />
          </div>
          <div>
          <label>Campus:</label>
            <select> 
              {
                allCampuses.map( campus =>{
                  return (
                    <option 
                      key={campus.id}
                    >
                      {campus.name}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default">Create New Student</button>
          </div>
        </form>
    )
  }

  handleNameInput(event){
    return this.setState({
      nameEntry: event.target.value,
    })
  }

  handleSelectCampus(event){
    return this.setState({
      selectedCampus: event.target.value
    })
  }

  handleFormSubmit(event){
    event.preventDefault();
    const formInput = {name:this.state.nameEntry, campusId: this.selectedCampus} 
    console.log('THIS IS THE FORM INPUT!', formInput)
    this.props.createStudent(formInput);
  }
} 

  const mapStateToProps = function(state){
    return {
      allStudents: state.allStudents,
      allCampuses: state.allCampuses
    }
  }; 

  const mapDispatchToProps = (dispatch) => {
    return {
      createStudent: function(formInput){
        dispatch(createStudent(formInput));
      }
    }
  }





export default connect(mapStateToProps,mapDispatchToProps)(NewStudentForm);
