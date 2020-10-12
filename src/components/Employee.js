import React from 'react';

export default class Employee extends React.Component{

  static employeeName = 'name';
  static employeeEmail = 'email';
  static row = 'row'

  constructor(props){
    super()
    this.state = {
    employeeId : props.employeeId,
    employeeName : props.employeeName,
    employeeEmail : props.employeeEmail,
    editMode : props.editMode
    }
  }

  isEdditingAllowed = (b) => {
    this.setState({editMode : b})
  }

  updateEmployee = () => {
    const id = this.state.employeeId;
    let updatedEmployee = {
      employeeId : id,
      employeeName : document.getElementById(Employee.employeeName + id).value,
      employeeEmail : document.getElementById(Employee.employeeEmail + id).value
    };
    this.setState({
      editMode : false}, () => {
        this.props.updateEmployee(updatedEmployee);
    })
    
  }

  deleteEmployee = (id) => {
    this.props.deleteEmployee(id)
  }

  render() {
    let id = this.state.employeeId;
    return (
      <div>
      {
      this.state.editMode ? 
        
        <div>
        <input id={Employee.employeeName + id} defaultValue={this.state.employeeName}/>
        <input id={Employee.employeeEmail + id} defaultValue={this.state.employeeEmail}/>
        <button onClick={this.updateEmployee}>Update</button>
        <button onClick={this.isEdditingAllowed}>Cancel</button>
        </div>
        :
        <div>
        <span>{this.state.employeeName}</span>
        <span>{this.state.employeeEmail}</span>
        <button onClick={() => this.isEdditingAllowed(true)}>Edit</button>
        <button onClick={() => this.deleteEmployee(id)}>Delete</button>
        </div>


      }
      </div>
  )}
}