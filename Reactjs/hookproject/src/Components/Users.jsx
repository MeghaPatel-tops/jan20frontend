import React, { useEffect, useState } from 'react'

function Users() {
    const [user,setUser]=useState([])
    const getUser = ()=>{
        fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => setUser(json))
    }

    useEffect(()=>{
        getUser();
    },[])
  return (
    <div>
        <ul>
        {
            user && user.map((index,i)=>(
                <li key={i} >{index.name}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default Users