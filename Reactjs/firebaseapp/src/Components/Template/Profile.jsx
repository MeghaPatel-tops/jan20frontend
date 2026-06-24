import React, { useContext, useEffect } from 'react'
import { checkAuth } from '../comman/AuthChecker'
import { useNavigate } from 'react-router-dom';
import { collection, deleteDoc, getDoc, getDocs, query, where, doc } from "firebase/firestore";
import db from "../../firebase/db";
import { AuthContext } from '../AuthContext';


function Profile() {
    const navigate= useNavigate();
      const {isLogged, setIsLogged} = useContext(AuthContext)
    
   
     const logout = async () => {
    

    try {
        let loggedUser = localStorage.getItem('loggedUser');
        loggedUser = JSON.parse(loggedUser)
        let q = query(collection(db, 'user_token'), where('uid', "==", loggedUser.uid), where('token', "==", loggedUser.token));


        let queryDoc = await getDocs(q);
        queryDoc.forEach(async (doc1) => {
            console.log(doc1.id);
            await deleteDoc(doc(db, "user_token", doc1.id));

        });
        localStorage.removeItem('loggedUser')
        setIsLogged(false)
        navigate('/login')

    } catch (error) {
        console.log(error);

    }
}

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