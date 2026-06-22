import React, { useEffect } from 'react'
import { checkAuth, logout } from '../comman/AuthChecker'
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate= useNavigate();
   

    useEffect(()=>{
        if(checkAuth){
              console.log("done");
              
        }
        else{
            navigate('/login')
        }
    })
  return (
    <div>Profile
        <button className="py-2 px-3 bg-blue-300 text-white" onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile