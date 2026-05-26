import React from 'react'
import './style.css'
function InlineCss() {
   const btn = {
       padding:'10px 20px',
       borderRadius:'20px'
   }
  return (
    <div>
        <h1>Welcome to App</h1>
        <p style={{backgroundColor:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum totam tempora deleniti temporibus necessitatibus alias enim commodi laborum ducimus numquam, optio exercitationem quasi, cumque ullam ut! Pariatur nam asperiores illum!</p>
        <button style={btn}>Contact us</button>
    </div>
  )
}

export default InlineCss