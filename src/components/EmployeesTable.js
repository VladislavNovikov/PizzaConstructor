import React from 'react';
import Employee from './Employee';

export default class EmployeesTable extends React.Component{

  constructor(){
    super()
    this.state = {
      employeesList : [
        {
          employeeId : 32435233213213,
          employeeName : 'Vasya',
          employeeEmail : 'vasya@gmail.com'
        },
        {
          employeeId : 45443213213224,  
          employeeName : 'Petya',
          employeeEmail : 'petya@gmail.com'
        }
      ]
    }
  }

  deleteEmployee = (index) => {
    let employees = [ ...this.state.employeesList ];
    employees.splice(index,1);
    this.setState({ employeesList : employees });
  }

  updateEmployee = (updatedEmployee) => {
    let newEmployees = [ ...this.state.employeesList ];
    newEmployees[newEmployees.findIndex(el => el.employeeId === updatedEmployee.employeeId)] = updatedEmployee;
    this.setState({ employeesList : newEmployees });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <div>
            <div>Name</div>
            <div>Email</div>
            <div>Edit/Delete</div>
            </div>
          </div>
          <div>
            {
            this.state.employeesList.map((value, key) => 
              <Employee 
                key = {value.employeeId}
                employeeId = {value.employeeId}
                employeeName = {value.employeeName}
                employeeEmail = {value.employeeEmail}
                deleteEmployee = {this.deleteEmployee}
                updateEmployee = {this.updateEmployee}
                editMode = {false}
              />
            )}
          </div>  
        </div>
      </div>
    )
  }
}