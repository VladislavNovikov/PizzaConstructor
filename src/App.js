import React from 'react'
import PizzaConstructor from './components/PizzaConstructor'
import EmployeesTable from './components/EmployeesTable'

function App() {
  return (
    <div className='container'>
      <PizzaConstructor/>
      <br/>
      <EmployeesTable/>
    </div>
  );
}

export default App;
