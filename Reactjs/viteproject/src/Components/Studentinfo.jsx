import React, { useEffect, useState } from 'react'

function Studentinfo() {
    const [studentlist, setStudentList] = useState([])
    const [student, setStudent] = useState({})
    const [edit,setEdit]= useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        })
    }
    const delStudent=(id)=>{
        let newArray = studentlist.filter((index,i)=>{
              if(id!=i){
                  return index
              }
        })
        setStudentList(newArray)
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(student);
        setStudentList([
            ...studentlist,
            student
        ])
        console.log(studentlist);
        setStudent({sname:"",email:"",contact:""})
      
        

    }
    const editStudent = (id)=>{
       setEdit(id)
            setStudent(studentlist[id])
        
    }
    const handleUpdate = (e)=>{
        e.preventDefault();
         let newArray = studentlist.map((index,i)=>{
              if(i==edit){
                 return student
              }
              return index
         })
         console.log(newArray);
         setStudentList(newArray)
         setStudent({sname:"",email:"",contact:""})
         setEdit(null)
         
    }

    // useEffect(()=>{
    //         console.log('comp load');
            
    // },[studentlist,student])
    return (
        <div>
            <div class="container py-5">


                <div class="text-center mb-4">
                    <h1 class="fw-bold">Student Information</h1>
                    <p class="text-muted">Bootstrap Student Form & Table Design</p>
                </div>


                <div class="card student-card p-4 mb-5">
                    <h3 class="mb-4">Add Student</h3>

                    <form method='post'>

                        <div class="row g-3">


                            <div class="col-md-4">
                                <label class="form-label">Student Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter student name"
                                    name='sname'
                                    value={student.sname}
                                    onChange={handleChange}
                                />
                            </div>

                            <div class="col-md-4">
                                <label class="form-label">Email</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    placeholder="Enter email"
                                    name='email'
                                    value={student.email}
                                    onChange={handleChange}
                                />
                            </div>


                            <div class="col-md-4">
                                <label class="form-label">Contact</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter contact number"
                                    name='contact'
                                    value={student.contact}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>


                        <div class="mt-4">
                           {
                             edit==null ?  <button type="submit" class="btn btn-primary" onClick={handleClick}>
                                Add Student
                            </button>:
                             <button type="submit" class="btn btn-primary" onClick={handleUpdate}>
                                update Student
                            </button>
                           }

                            <button type="reset" class="btn btn-secondary">
                                Reset
                            </button>
                        </div>

                    </form>
                </div>


                <div class="card student-card p-4">

                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h3>Student List</h3>

                        <input
                            type="text"
                            class="form-control w-25"
                            placeholder="Search Student"
                        />
                    </div>

                    <div class="table-responsive">

                        <table class="table table-bordered table-hover">

                            <thead class="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Student Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th width="180">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    studentlist && studentlist.map((index, i) => (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{index.sname}</td>
                                            <td>{index.email}</td>
                                            <td>{index.contact}</td>
                                            <td>
                                                <button class="btn btn-success btn-sm" onClick={()=>{
                                                    editStudent(i)
                                                }}>
                                                    Edit
                                                </button>

                                                <button class="btn btn-danger btn-sm" onClick={()=>{
                                                    delStudent(i)
                                                }}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>

                                    ))
                                }
                              

                             
                            

                            </tbody>

                        </table>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Studentinfo