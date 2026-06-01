import React from 'react'
import Child from './Child'

function Parent(props) {
    const userid=props.userid
  return (
    <div>
        parent
        <Child userid={userid}/>
    </div>
  )
}

export default Parent