import React, { useCallback, useEffect, useState } from 'react'

function EditUser() {
    const [id,setId]=useState(null);

    const memoFunction = useCallback(()=>{
        console.log('function called'+id);
        
    },[id])

    memoFunction()

    useEffect(()=>{
        console.log("effcet called");
        
    },[])
  return (
    <div>EditUser
        <button onClick={()=>{
            const idd = prompt("Enter id");
            setId(idd)
        }}>SetId</button>
    </div>
  )
}

export default EditUser