import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
      const [emp, setEmp] = useState({});
    const id = useParams().id

    const EmpById =async () => {
        try {
            let res = await axios.get(`http://localhost:5000/emp/${id}`);
            if (res) {
                console.log(res.data);
                
                setEmp(res.data)
            }
        } catch (error) {
            console.log(error);

        }
    }
  

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmp({
            ...emp,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(emp);
            let res = await axios.put('http://localhost:5000/emp/'+id, emp);
            if (res) {
                alert("employee updated")
                navigate('/')
            }

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(()=>{
        EmpById()
    },[])
    return (
        <div>
            <fieldset>
                <legend>Register employee</legend>
                <form onSubmit={handleSubmit} method='post'>
                    <label htmlFor="">Name</label>
                    <input type="text" name="empname" onChange={handleChange} value={emp.empname}/>
                    <br />
                    <label htmlFor="">email</label>

                    <input type="text" name="email" onChange={handleChange} value={emp.email} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </fieldset>
        </div>
    )
}

export default Edit