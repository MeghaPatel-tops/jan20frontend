import React from 'react'
import  styled from 'styled-components'
   const Main = styled.h2`
        font-size:4em;
        color:red;
    `;
function Profile() {
 
  return (
    <div>
        <Main>Megha Patel</Main>
        <h3>Full Stack Developer</h3>
    </div>
  )
}

export default Profile