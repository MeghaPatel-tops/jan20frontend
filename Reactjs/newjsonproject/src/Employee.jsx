import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Employee() {
    const [ emp,setEmp] = useState([]);
    const [search,setSearch]=useState("");

    const getEmp = async()=>{
        try {
            let res = await axios.get('http://localhost:5000/emp');
            if(res){
                setEmp(res.data)
            }
        } catch (error) {
                console.log(error);
                
        }
    }
     const deltEmp = async(id)=>{
        try {
            let res = await axios.delete('http://localhost:5000/emp/'+id);
            if(res){
                alert('deleted succesfully')
                getEmp();
            }
        } catch (error) {
                console.log(error);
                
        }
    }

    const handleChange = (e)=>{
         setSearch(e.target.value)
    }

    const filterEmp = useMemo(()=>{
        let newEmpArray = [];
         if(search != ""){
             newEmpArray = emp.filter((index,i)=>{
                if(index.empname.toLowerCase().includes(search.toLowerCase())){
                    return index;
                }
         })
         }
         else{
             newEmpArray=emp;
         }
         console.log(newEmpArray);
         
         return newEmpArray;
    },[search,emp])

    useEffect(()=>{
        getEmp()
    },[])
  return (
    <div >
        <NavLink to={'/create'}>Create new</NavLink>
        <div style={{display:'flex',justifyContent:'flex-start'}}>
            <input type="text" name="" id="" onChange={handleChange} placeholder='search here '/>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                     filterEmp && filterEmp.map((index,i)=>(
                        <tr>
                            <td>{index.empname}</td>
                            <td>{index.email}</td>
                            <td><button onClick={()=>{
                                deltEmp(index.id)
                            }}>Delete</button></td>
                            <td>
                                <NavLink to={'/edit/'+index.id}>Edit</NavLink>
                            </td>
                        </tr>
                     ))
                }
            </tbody>
        </table>
        </div>
  )
}

export default Employee