import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const  [emp,setEmp] = useState({});

    const navigate = useNavigate();
    const handleChange = (e)=>{
        const { name,value}= e.target;
        setEmp({
            ...emp,
            [name]:value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            console.log(emp);
            let res = await axios.post('http://localhost:5000/emp',emp);
            if(res){
                alert("employee added")
                navigate('/')
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>
        <fieldset>
            <legend>Register employee</legend>
            <form onSubmit={handleSubmit} method='post'>
                <label htmlFor="">Name</label>
                <input type="text" name="empname" onChange={handleChange}/>
                <br />
                <label htmlFor="">email</label>
               
                <input type="text" name="email" onChange={handleChange} />
                 <br />
                <input type="submit" value="Submit" />
            </form>
        </fieldset>
    </div>
  )
}

export default Create