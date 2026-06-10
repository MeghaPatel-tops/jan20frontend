import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Employeeindex() {
  const [empData,setEmpData]=useState([]);

  const delEmp = async(id)=>{
    alert(id)
    try {
        let res = await axios.delete('http://localhost:5000/employees/'+id)
        getEmpData();
         return
    } catch (error) {
        console.log(error);
        
    }
  }

  const getEmpData = async()=>{
      try {
          let res = await axios.get('http://localhost:5000/employees');
          console.log(res.data);
          setEmpData(res.data)
         
          
      } catch (error) {
        console.log(error);
        
      }
  }

  useEffect(()=>{
      getEmpData();
  },[])
  return (
    <div>
        <div classNameName="container p-12 flex justify-between h-25 items-center">
            <h2 classNameName='text-4xl'>View All Employee</h2>
            <NavLink to={'/employee/create'} classNameName="bg-gray-900 text-white px-2 py-1 rounded">Create New</NavLink>
        </div>

        

     <div className='p-5'>
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded border border-default p-5">
    <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                   Employee Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Email
                </th>
              
                <th scope="col" className="px-6 py-3 font-medium">
                    Contact
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Address
                </th>
                 <th scope="col" className="px-6 py-3 font-medium">
                  Action
                </th>
            </tr>
        </thead>
        <tbody>
          {
             empData && empData.map((index,i)=>(
                <tr className="bg-neutral-primary border-b border-default" key={i}>
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    {index.empname}
                </th>
                <td className="px-6 py-4">
                    {index.email}
                </td>
                <td className="px-6 py-4">
                    {index.telephone}
                </td>
                <td className="px-6 py-4">
                    {index.address}
                </td>
                <td>
                    <button type='button' classNameName='bg-red-800 py-2 px-3 text-white'><i className="fa-solid fa-trash" onClick={()=>{
                      delEmp(index.id)
                    }}></i></button>
                    <NavLink classNameName='bg-green-800 mx-2 py-2 px-3 text-white'><i className="fa-solid fa-pen-to-square"></i></NavLink>
                </td>
               
            </tr>
             ))
          }
          
         
        </tbody>
    </table>
</div>
     </div>

       
    </div>
  )
}

export default Employeeindex