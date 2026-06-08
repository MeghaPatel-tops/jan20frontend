import axios from 'axios';
import React, { useState } from 'react'

function EmpCreate() {
    const [emp,setEmp] = useState({empname:"",email:"",telephone:"",address:""});

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setEmp({
            ...emp,
            [name]:value
        })
    }

    const handleClick=async()=>{
      
        try {
               const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        
        if(emp.empname == ""){
            alert("Enetr valid employee name")
            return 
        }
        if(!emailRegex.test(emp.email)) {
            alert("Enetr valid employee Email")
            return 
        }
        const res = await axios.post('http://localhost:5000/employees', emp);
        if(res){
            console.log("Employe sucessfully added")
        }
        console.log("btn clicked");
        
        } catch (error) {
            console.log(error);
            
        }
          
    }
    return (
      
            <div className="bg-gray-100 p-12">
                <h2 className='text-4xl text-center'>Create Employee</h2>
                <div class=" flex items-center justify-center p-4">
                    <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
                        <h2 class="text-2xl font-bold text-center mb-6">
                            Employee Form
                        </h2>

                        

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Employee Name
                                </label>
                                <input
                                    type="text"
                                    name='empname'
                                    onChange={handleChange}
                                    placeholder="Enter employee name"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                     onChange={handleChange}
                                    placeholder="Enter email"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    name='telephone'
                                     onChange={handleChange}
                                    placeholder="Enter contact number"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Address
                                </label>
                                <textarea
                                    rows="1"
                                    name='address'
                                     onChange={handleChange}
                                    placeholder="Enter address"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>


                          <button type='button' onClick={
                               handleClick
                          }>save</button>
                                
                            

                       
                    </div>
                </div>
            </div>
       
    )
}

export default EmpCreate