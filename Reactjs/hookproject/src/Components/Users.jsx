import React, { useEffect, useMemo, useState } from 'react'

function Users() {
    const [findTxt,setFindTxt] = useState("");
    const [user,setUser]=useState([])
    const getUser = ()=>{
        fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => setUser(json))
    }


    const filterUser = useMemo(()=>{
        let newUserArray = user.filter((index,i)=>{
             if(index.name.toLowerCase().includes(findTxt.toLowerCase())){
                    return index;
             }
        })
       
        newUserArray = newUserArray ?? user
        return newUserArray 
        
    },[findTxt,user])


    const handleChange = (e)=>{
          setFindTxt(e.target.value)
    }
    

    useEffect(()=>{
        getUser();
    },[])
  return (
    <div>

        <fieldset>
            <h2>User List</h2>
            <input type="text" name="findtxt" id="" onChange={handleChange}/>
             <ul>
        {
            filterUser && filterUser.map((index,i)=>(
                <li key={i} >{index.name}</li>
            ))
        }
        </ul>
        </fieldset>
    </div>
  )
}

export default Users