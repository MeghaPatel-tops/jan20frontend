import React from 'react'
import UserCard from './UserCard'

function User() {
    const user = {
        image:"https://i.pravatar.cc/150?img=12",
        name:7789787897,
        des:"Front-end Developer",
        email:"megha123@gmail.com",
        contact:909090909,
        handleClick:()=>{}
    }
  return (
    <div>
        <UserCard user={user}/>
    </div>
  )

 
}

export default User