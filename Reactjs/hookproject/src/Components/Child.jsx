import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

function Child(props) {
    const userId = useContext(UserContext)
  return (
    <div>Userid:{props.userid}
    <h1>Userid by context{userId}</h1>
    </div>

    
  )
}

export default Child