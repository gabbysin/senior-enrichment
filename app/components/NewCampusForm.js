import React from 'react';
import { connect } from 'react-redux';
import { createCampus } from '../reducers';

class NewCampusForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameEntry: '',
      imgEntry: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleImgInput = this.handleImgInput.bind(this);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Campus Name:</label>
            <input 
              type="text"
              name="campusName"
              value={this.state.nameEntry}
              onChange={this.handleNameInput}
              />
          </div>
          <div>
            <label>Campus Image:</label>
            <input 
              type="text"
              name="campusImage"
              value={this.state.imgEntry}
              onChange={this.handleImgInput}
              />
        </div>
          <div>
            <button type="submit">Create New Campus</button>
          </div>
        </form>
      </div>
    )
  }

  handleNameInput(event){
    return this.setState({
      nameEntry: event.target.value,
    })
  }

  handleImgInput(event){
    return this.setState({
      imgEntry: event.target.value,
    })
  }

  handleFormSubmit(event){
    event.preventDefault();
    const formInput = {name:this.state.nameEntry, img:this.state.imgEntry}; 
    this.props.createCampus(formInput);
  }
} 

  const mapDispatchToProps = (dispatch) => {
    return {
      createCampus: function(formInput){
        dispatch(createCampus(formInput));
      }
    }
  }


export default connect(null, mapDispatchToProps)(NewCampusForm);