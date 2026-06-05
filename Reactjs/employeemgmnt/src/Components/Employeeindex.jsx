import React from 'react'
import { NavLink } from 'react-router-dom'

function Employeeindex() {
  return (
    <div>
        <div className="container p-12 flex justify-between h-25 items-center">
            <h2 className='text-4xl'>View All Employee</h2>
            <NavLink to={'/employee/create'} className="bg-gray-900 text-white px-2 py-1 rounded">Create New</NavLink>
        </div>
       
    </div>
  )
}

export default Employeeindex